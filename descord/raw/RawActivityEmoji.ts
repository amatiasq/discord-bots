import { EmojiId } from '../type-aliases.ts';

export interface RawActivityEmoji {
	/** the name of the emoji */
	name: string;
	/** the id of the emoji */
	id?: EmojiId;
	/** whether this emoji is animated    */
	animated?: boolean;
}
