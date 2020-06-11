import { ClientStatusRaw } from '../raw/ClientStatusRaw.ts';

export type ClientStatus = ReturnType<typeof wrapClientStatus>;

export function wrapClientStatus(json: ClientStatusRaw) {
	return json;
}
