import { RawModifyGuildRolePayload } from '../raw/RawModifyGuildRolePayload.ts';
import { Permission, parsePermissionInteger, unparsePermissionInteger, integer } from '../type-aliases.ts';

export interface ModifyGuildRolePayload {
	/** name of the role */
	name?: string;
	/** bitwise value of the enabled/disabled permissions */
	permissions?: Permission[];
	/** RGB color value */
	color?: integer;
	/** whether the role should be displayed separately in the sidebar */
	hoist?: boolean;
	/** whether the role should be mentionable */
	mentionable?: boolean;
}


export function wrapModifyGuildRolePayload(x: RawModifyGuildRolePayload): ModifyGuildRolePayload {
	return {
		...x,
		permissions: x.permissions && parsePermissionInteger(x.permissions),
	};
};

export function unwrapModifyGuildRolePayload(x: ModifyGuildRolePayload): RawModifyGuildRolePayload {
	return {
		...x,
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
	};
};

