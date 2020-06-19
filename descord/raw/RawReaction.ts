import { integer } from '../type-aliases.ts';
import { RawEmoji } from './RawEmoji.ts';

export interface RawReaction {
	/** times this emoji has been used to react */
	count: integer;
	/** whether the current user reacted using this emoji */
	me: boolean;
	/** emoji information */
	emoji: RawEmoji;
}
