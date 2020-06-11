import { RoleRaw } from '../api/RoleRaw.ts';
import { parsePermissionInteger } from '../type-aliases.ts';

export type Role = ReturnType<typeof wrapRole>;

export function wrapRole(json: RoleRaw) {
	return {
		...json,

		// Deserialization
		permissions: parsePermissionInteger(json.permissions),
	};
}
