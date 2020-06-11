import { parsePermissionInteger } from '../../type-aliases.ts';
import { RoleRaw } from '../raw/RoleRaw.ts';

export type Role = ReturnType<typeof wrapRole>;

export function wrapRole(json: RoleRaw) {
	return {
		...json,

		// Deserialization
		permissions: parsePermissionInteger(json.permissions),
	};
}
