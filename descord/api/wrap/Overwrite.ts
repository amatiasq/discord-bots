Interface not found in:

 import { PermissionInteger, UserId, RoleId } from '../../type-aliases.ts';

interface RawOverwrite_Role {
	/** role or user id */
	id: RoleId;
	/** either "role" or "member" */
	type: 'role';
	/** permission bit set */
	allow: PermissionInteger;
	/** permission bit set */
	deny: PermissionInteger;
}

interface RawOverwrite_Member {
	/** role or user id */
	id: UserId;
	/** either "role" or "member" */
	type: 'member';
	/** permission bit set */
	allow: PermissionInteger;
	/** permission bit set */
	deny: PermissionInteger;
}

export type RawOverwrite = RawOverwrite_Role | RawOverwrite_Member;

