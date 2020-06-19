import { RawEditChannelPermissionsPayload } from '../raw/RawEditChannelPermissionsPayload.ts';
import { Permission, parsePermissionInteger, unparsePermissionInteger } from '../type-aliases.ts';

export interface EditChannelPermissionsPayload {
	/** "member" for a user or "role" for a role */
	type: 'member' | 'role';
	/** the bitwise value of all allowed permissions */
	allow: Permission[];
	/** the bitwise value of all disallowed permissions */
	deny: Permission[];
}


export function wrapEditChannelPermissionsPayload(x: RawEditChannelPermissionsPayload): EditChannelPermissionsPayload {
	return {
		...x,
		allow: parsePermissionInteger(x.allow),
		deny: parsePermissionInteger(x.deny),
	};
};

export function unwrapEditChannelPermissionsPayload(x: EditChannelPermissionsPayload): RawEditChannelPermissionsPayload {
	return {
		...x,
		allow: unparsePermissionInteger(x.allow),
		deny: unparsePermissionInteger(x.deny),
	};
};

