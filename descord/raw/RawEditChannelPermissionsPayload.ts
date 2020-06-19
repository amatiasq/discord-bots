import { PermissionInteger } from '../type-aliases.ts';

export interface RawEditChannelPermissionsPayload {
	/** "member" for a user or "role" for a role */
	type: 'member' | 'role';
	/** the bitwise value of all allowed permissions */
	allow: PermissionInteger;
	/** the bitwise value of all disallowed permissions */
	deny: PermissionInteger;
}
