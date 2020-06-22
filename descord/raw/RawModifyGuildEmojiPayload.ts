import { RoleId } from '../type-aliases.ts';

export interface RawModifyGuildEmojiPayload {
	/** name of the emoji */
	name?: string;
	/** roles to which this emoji will be whitelisted */
	roles?: RoleId[];
}
