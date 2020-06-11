import { RoleRaw } from '../api/RoleRaw.ts';
import { parsePermissionsInteger } from '../type-aliases.ts';

export type IRole = ReturnType<typeof wrapRole>;

export function wrapRole(json: RoleRaw) {
	return {
		...json,

		// Deserialization
		permissions: parsePermissionsInteger(json.permissions),
	};
}