import { RoleId, integer } from '../type-aliases.ts';

export interface RawModifyGuildRolePositionsPayload {
	/** role */
	id: RoleId;
	/** sorting position of the role */
	position?: integer;
}
