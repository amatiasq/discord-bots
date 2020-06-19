import { RoleId, ImageData } from '../type-aliases.ts';

export interface RawCreateGuildEmojiPayload {
	/** name of the emoji */
	name: string;
	/** the 128x128 emoji image */
	image: ImageData;
	/** roles for which this emoji will be whitelisted */
	roles: RoleId[];
}
