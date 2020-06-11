import { RoleId, PermissionsInteger } from '../type-aliases.ts';

export interface RoleRaw {
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
	permissions: PermissionsInteger;
	/** whether this role is managed by an integration */
	managed: boolean;
	/** whether this role is mentionable */
	mentionable: boolean;
}
