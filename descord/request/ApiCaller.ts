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

		try {
			const json = await response.json();
			return json as T;
		} catch (err) {
			console.log(await response.text());
		}
	}

	get<T = any>(url: string) {
		return this.request<T>(RequestMethod.GET, url);
	}

	put<T = any>(url: string, body: RequestBody) {
		return this.request<T>(RequestMethod.PUT, url, body);
	}

	post<T = any>(url: string, body: RequestBody) {
		return this.request<T>(RequestMethod.POST, url, body);
	}

	delete<T = any>(url: string, body: RequestBody) {
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
		method,
		headers: {
			Authorization: authorization,
			'User-Agent': 'Descord (https://github.com/amatiasq/descord, 0.0.1)',
			'Content-Type': 'application/json',
		},
		body: body && JSON.stringify(body),
	});
}
