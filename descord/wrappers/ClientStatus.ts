import { ClientStatusRaw } from '../api/ClientStatusRaw.ts';

export type IClientStatus = ReturnType<typeof wrapClientStatus>;

export function wrapClientStatus(json: ClientStatusRaw) {
	return json;
}
