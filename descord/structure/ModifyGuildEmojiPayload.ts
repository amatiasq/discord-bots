import { RawModifyGuildEmojiPayload } from '../raw/RawModifyGuildEmojiPayload.ts';
import { RoleId } from '../type-aliases.ts';

export interface ModifyGuildEmojiPayload {
	/** name of the emoji */
	name: string;
	/** roles to which this emoji will be whitelisted */
	roles: RoleId[];
}


export function wrapModifyGuildEmojiPayload(x: RawModifyGuildEmojiPayload): ModifyGuildEmojiPayload {
	return x;
};

export function unwrapModifyGuildEmojiPayload(x: ModifyGuildEmojiPayload): RawModifyGuildEmojiPayload {
	return x;
};

export function wrapModifyGuildEmojiPayloadPartial(x: Partial<RawModifyGuildEmojiPayload>): Partial<ModifyGuildEmojiPayload> {
	return x;
};

export function unwrapModifyGuildEmojiPayloadPartial(x: Partial<ModifyGuildEmojiPayload>): Partial<RawModifyGuildEmojiPayload> {
	return x;
};

