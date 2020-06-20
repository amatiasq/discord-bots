import { RawEmoji } from '../raw/RawEmoji.ts';
import { EmojiId, RoleId } from '../type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface Emoji {
	/** emoji id */
	id?: EmojiId;
	/** emoji name (can be null only in reaction emoji objects) */
	name?: string;
	/** roles this emoji is whitelisted to */
	roles?: RoleId[];
	/** user that created this emoji */
	user?: User;
	/** whether this emoji must be wrapped in colons */
	requireColons?: boolean;
	/** whether this emoji is managed */
	managed?: boolean;
	/** whether this emoji is animated */
	animated?: boolean;
	/** whether this emoji can be used, may be false due to loss of Server Boosts */
	available?: boolean;
}


export function wrapEmoji(x: RawEmoji): Emoji {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
	};
};

export function unwrapEmoji(x: Emoji): RawEmoji {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
	};
};

export function wrapEmojiPartial(x: Partial<RawEmoji>): Partial<Emoji> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
	};
};

export function unwrapEmojiPartial(x: Partial<Emoji>): Partial<RawEmoji> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
	};
};

