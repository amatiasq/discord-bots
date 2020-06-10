import { EmojiId } from '../type-aliases.ts';
import { RoleStructure } from './RoleStructure.ts';
import { UserStructure } from './UserStructure.ts';

export interface EmojiStructure {
	/** emoji id */
	id: EmojiId;
	/** emoji name (can be null only in reaction emoji objects) */
	name: string | null;
	/** roles this emoji is whitelisted to */
	roles?: RoleStructure[];
	/** user that created this emoji */
	user?: UserStructure;
	/** whether this emoji must be wrapped in colons */
	require_colons?: boolean;
	/** whether this emoji is managed */
	managed?: boolean;
	/** whether this emoji is animated */
	animated?: boolean;
	/** whether this emoji can be used, may be false due to loss of Server Boosts */
	available?: boolean;
}
