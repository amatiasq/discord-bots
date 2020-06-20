import { RawModifyGuildRolePositionsPayload } from '../raw/RawModifyGuildRolePositionsPayload.ts';
import { RoleId, integer } from '../type-aliases.ts';

export interface ModifyGuildRolePositionsPayload {
	/** role */
	id: RoleId;
	/** sorting position of the role */
	position?: integer;
}


export function wrapModifyGuildRolePositionsPayload(x: RawModifyGuildRolePositionsPayload): ModifyGuildRolePositionsPayload {
	return x;
};

export function unwrapModifyGuildRolePositionsPayload(x: ModifyGuildRolePositionsPayload): RawModifyGuildRolePositionsPayload {
	return x;
};

export function wrapModifyGuildRolePositionsPayloadPartial(x: Partial<RawModifyGuildRolePositionsPayload>): Partial<ModifyGuildRolePositionsPayload> {
	return x;
};

export function unwrapModifyGuildRolePositionsPayloadPartial(x: Partial<ModifyGuildRolePositionsPayload>): Partial<RawModifyGuildRolePositionsPayload> {
	return x;
};

