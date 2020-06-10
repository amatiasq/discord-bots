import { PermissionInteger, UserId, RoleId } from '../type-aliases.ts';

interface OverwriteStructure_Role {
	/** role or user id */
	id: RoleId;
	/** either "role" or "member" */
	type: 'role';
	/** permission bit set */
	allow: PermissionInteger;
	/** permission bit set */
	deny: PermissionInteger;
}

interface OverwriteStructure_Member {
	/** role or user id */
	id: UserId;
	/** either "role" or "member" */
	type: 'member';
	/** permission bit set */
	allow: PermissionInteger;
	/** permission bit set */
	deny: PermissionInteger;
}

export type OverwriteStructure =
	| OverwriteStructure_Role
	| OverwriteStructure_Member;
