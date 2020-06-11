import { snowflake } from '../type-aliases.ts';

export interface ActivityEmojiRaw {
	/** the name of the emoji */
	name: string;
	/** the id of the emoji */
	id?: snowflake;
	/** whether this emoji is animated    */
	animated?: boolean;
}