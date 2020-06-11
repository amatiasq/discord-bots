import { ClientStatusRaw } from '../api/ClientStatusRaw.ts';

export type ClientStatus = ReturnType<typeof wrapClientStatus>;

export function wrapClientStatus(json: ClientStatusRaw) {
	return json;
}
