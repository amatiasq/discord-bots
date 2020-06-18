import { RawGuildMember } from '../raw/RawGuildMember.ts';
import { RoleId, parseSerializedDate, unparseSerializedDate } from '../../type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GuildMember {
	/** the user this guild member represents */
	user?: User;
	/** this users guild nickname */
	nick: string;
	/** array of role object ids */
	roles: RoleId[];
	/** when the user joined the guild (ISO8601 timestamp) */
	joinedAt: Date;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premiumSince?: SerializedDate;
	/** whether the user is deafened in voice channels */
	deaf: boolean;
	/** whether the user is muted in voice channels */
	mute: boolean;
}


export function wrapGuildMember(x: RawGuildMember): GuildMember {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
		joinedAt: parseSerializedDate(x.joined_at),
		premiumSince: x.premium_since && parseSerializedDate(x.premium_since),
	};
};

export function unwrapGuildMember(x: GuildMember): RawGuildMember {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
		joined_at: unparseSerializedDate(x.joinedAt),
		premium_since: x.premiumSince && unparseSerializedDate(x.premiumSince),
	};
};

