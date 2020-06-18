import { RawRole } from '../raw/RawRole.ts';
import { RoleId, Permission, parsePermissionInteger, unparsePermissionInteger } from '../type-aliases.ts';

export interface Role {
	/** role id */
	id: RoleId;
	/** role name */
	name: string;
	/** integer representation of hexadecimal color code */
	color: number;
	/** if this role is pinned in the user listing */
	hoist: boolean;
	/** position of this role */
	position: number;
	/** permission bit set */
	permissions: Permission[];
	/** whether this role is managed by an integration */
	managed: boolean;
	/** whether this role is mentionable */
	mentionable: boolean;
}


export function wrapRole(x: RawRole): Role {
	return {
		...x,
		permissions: parsePermissionInteger(x.permissions),
	};
};

export function unwrapRole(x: Role): RawRole {
	return {
		...x,
		permissions: unparsePermissionInteger(x.permissions),
	};
};

