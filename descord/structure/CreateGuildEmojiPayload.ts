import { RawCreateGuildEmojiPayload } from '../raw/RawCreateGuildEmojiPayload.ts';
import { RoleId, ImageData } from '../type-aliases.ts';

export interface CreateGuildEmojiPayload {
	/** name of the emoji */
	name: string;
	/** the 128x128 emoji image */
	image: ImageData;
	/** roles for which this emoji will be whitelisted */
	roles: RoleId[];
}


export function wrapCreateGuildEmojiPayload(x: RawCreateGuildEmojiPayload): CreateGuildEmojiPayload {
	return x;
};

export function unwrapCreateGuildEmojiPayload(x: CreateGuildEmojiPayload): RawCreateGuildEmojiPayload {
	return x;
};

