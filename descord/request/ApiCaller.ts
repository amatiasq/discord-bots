import { RequestMethod } from './RequestMethod.ts';

export type RequestBody = {} | null;

export class ApiCaller {
	readonly authorization: string;

	constructor(token: string) {
		this.authorization = `Bot ${token}`;
	}

	async request<T>(
		method: RequestMethod,
		url: string,
		body: RequestBody = null,
	) {
		const request = createRequest(this.authorization, method, url, body);
		const response = await fetch(request);
		const json = await response.json();
		return json as T;
	}

	get<T>(url: string) {
		return this.request<T>(RequestMethod.GET, url);
	}

	put<T>(url: string, body: RequestBody) {
		return this.request<T>(RequestMethod.PUT, url, body);
	}

	post<T>(url: string, body: RequestBody) {
		return this.request<T>(RequestMethod.POST, url, body);
	}

	delete<T>(url: string, body: RequestBody) {
		return this.request<T>(RequestMethod.DELETE, url, body);
	}
}

function createRequest(
	authorization: string,
	method: RequestMethod,
	url: string,
	body: RequestBody,
) {
	return new Request(url, {
		method: method.toUpperCase(),
		headers: {
			Authorization: authorization,
			'User-Agent':
				'DiscordBot (https://github.com/skillz4killz/discordeno, 0.0.1)',
			'Content-Type': 'application/json',
			'X-Audit-Log-Reason': getReason(body),
		},
		body: JSON.stringify(body),
	});
}

function getReason(body: { reason?: string } | null) {
	return body && body.reason ? encodeURIComponent(body.reason) : '';
}
