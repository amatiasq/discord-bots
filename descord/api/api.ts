import { authorization, eventHandlers } from './client.ts';
import { delay } from 'https://deno.land/std@0.50.0/async/delay.ts';
import { Errors } from '../types/errors.ts';
import { HttpResponseCode } from '../types/discord.ts';

export enum RequestMethod {
	Get = 'get',
	Post = 'post',
	Put = 'put',
	Patch = 'patch',
	Head = 'head',
	Delete = 'delete',
}

const queue = [] as QueuedRequest[];
const ratelimitedPaths = new Map<string, RateLimitedPath>();
let globallyRateLimited = false;
let queueInProcess = false;

export interface QueuedRequest {
	callback: () => Promise<unknown>;
	bucketID?: string | null;
	url: string;
}

export interface RateLimitedPath {
	url: string;
	resetTimestamp: number;
	bucketID: string | null;
}

async function processRateLimitedPaths() {
	const now = Date.now();
	ratelimitedPaths.forEach((value, key) => {
		if (value.resetTimestamp < now) return;
		ratelimitedPaths.delete(key);
		if (key === 'global') globallyRateLimited = false;
	});

	await delay(1000);
	processRateLimitedPaths();
}

async function processQueue() {
	if (queue.length && !globallyRateLimited) {
		const request = queue.shift();

		if (request?.bucketID) {
			const rateLimitResetIn = checkRatelimits(request.bucketID);
			const rateLimitedURLResetIn = checkRatelimits(request.url);
			if (rateLimitResetIn) {
				// This request is still rate limited readd to queue
				queue.push(request);
			} else if (rateLimitedURLResetIn) {
				// This URL is rate limited readd to queue
				queue.push(request);
			} else {
				// This request is not rate limited so it should be run
				await request.callback();
			}
		} else {
			// This request has no bucket id so it should be processed
			await request?.callback();
		}
	}

	if (queue.length) processQueue();
	else queueInProcess = false;
}

processRateLimitedPaths();

export const RequestManager = {
	get: async (url: string, body?: unknown) => {
		return runMethod(RequestMethod.Get, url, body);
	},
	post: (url: string, body?: unknown) => {
		return runMethod(RequestMethod.Post, url, body);
	},
	delete: (url: string, body?: unknown) => {
		return runMethod(RequestMethod.Delete, url, body);
	},
	patch: (url: string, body?: unknown) => {
		return runMethod(RequestMethod.Patch, url, body);
	},
	put: (url: string, body?: unknown) => {
		return runMethod(RequestMethod.Put, url, body);
	},
};

function createRequestBody(body: any, method: RequestMethod) {
	return {
		headers: {
			Authorization: authorization,
			'User-Agent': `DiscordBot (https://github.com/skillz4killz/discordeno, 0.0.1)`,
			'Content-Type': 'application/json',
			'X-Audit-Log-Reason': body ? encodeURIComponent(body.reason) : '',
		},
		body: JSON.stringify(body),
		method: method.toUpperCase(),
	};
}

function checkRatelimits(url: string) {
	const ratelimited = ratelimitedPaths.get(url);
	const global = ratelimitedPaths.get('global');

	const now = Date.now();
	if (ratelimited && now < ratelimited.resetTimestamp) {
		return ratelimited.resetTimestamp - now;
	}
	if (global && now < global.resetTimestamp) {
		return global.resetTimestamp - now;
	}

	return false;
}

async function runMethod(
	method: RequestMethod,
	url: string,
	body?: unknown,
	retryCount = 0,
	bucketID?: string | null,
) {
	eventHandlers.debug?.({
		type: 'requestManager',
		data: { method, url, body, retryCount, bucketID },
	});

	return new Promise((resolve, reject) => {
		const callback = async () => {
			try {
				const rateLimitResetIn = checkRatelimits(url);
				if (rateLimitResetIn) {
					return setTimeout(
						() => runMethod(method, url, body, retryCount++, bucketID),
						rateLimitResetIn,
					);
				}

				const response = await fetch(url, createRequestBody(body, method));
				const bucketIDFromHeaders = processHeaders(url, response.headers);
				handleStatusCode(response.status);

				// Sometimes Discord returns an empty 204 response that can't be made to JSON.
				if (response.status === 204) resolve();

				const json = await response.json();
				if (
					json.retry_after ||
					json.message === 'You are being rate limited.'
				) {
					if (retryCount > 10) {
						throw new Error(Errors.RATE_LIMIT_RETRY_MAXED);
					}

					return setTimeout(
						() =>
							runMethod(method, url, body, retryCount++, bucketIDFromHeaders),
						json.retry_after,
					);
				}

				eventHandlers.debug?.({
					type: 'requestManagerSuccess',
					data: { method, url, body, retryCount, bucketID },
				});
				return resolve(json);
			} catch (error) {
				eventHandlers.debug?.({
					type: 'requestManagerFailed',
					data: { method, url, body, retryCount, bucketID },
				});
				return reject(error);
			}
		};

		queue.push({
			callback,
			bucketID,
			url,
		});
		if (!queueInProcess) {
			queueInProcess = true;
			processQueue();
		}
	});
}

function handleStatusCode(status: number) {
	if (
		(status >= 200 && status < 400) ||
		status === HttpResponseCode.TooManyRequests
	) {
		return true;
	}

	switch (status) {
		case HttpResponseCode.BadRequest:
		case HttpResponseCode.Unauthorized:
		case HttpResponseCode.Forbidden:
		case HttpResponseCode.NotFound:
		case HttpResponseCode.MethodNotAllowed:
			throw new Error(Errors.REQUEST_CLIENT_ERROR);
		case HttpResponseCode.GatewayUnavailable:
			throw new Error(Errors.REQUEST_SERVER_ERROR);
	}

	// left are all unknown
	throw new Error(Errors.REQUEST_UNKNOWN_ERROR);
}

function processHeaders(url: string, headers: Headers) {
	let ratelimited = false;

	// Get all useful headers
	const remaining = headers.get('x-ratelimit-remaining');
	const resetTimestamp = headers.get('x-ratelimit-reset');
	const retryAfter = headers.get('retry-after');
	const global = headers.get('x-ratelimit-global');
	const bucketID = headers.get('x-ratelimit-bucket');

	// If there is no remaining rate limit for this endpoint, we save it in cache
	if (remaining && remaining === '0') {
		ratelimited = true;

		ratelimitedPaths.set(url, {
			url,
			resetTimestamp: Number(resetTimestamp) * 1000,
			bucketID,
		});

		if (bucketID) {
			ratelimitedPaths.set(bucketID, {
				url,
				resetTimestamp: Number(resetTimestamp) * 1000,
				bucketID,
			});
		}
	}

	// If there is no remaining global limit, we save it in cache
	if (global) {
		const reset = Date.now() + Number(retryAfter);
		eventHandlers.debug?.({
			type: 'globallyRateLimited',
			data: { url, reset },
		});
		globallyRateLimited = true;
		ratelimited = true;

		ratelimitedPaths.set('global', {
			url: 'global',
			resetTimestamp: reset,
			bucketID,
		});

		if (bucketID) {
			ratelimitedPaths.set(bucketID, {
				url: 'global',
				resetTimestamp: reset,
				bucketID,
			});
		}
	}

	return ratelimited ? bucketID : undefined;
}
