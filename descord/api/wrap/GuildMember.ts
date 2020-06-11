import { parseSerializedDate } from '../../type-aliases.ts';
import { omit } from '../../util/omit.ts';
import { GuildMemberRaw } from '../raw/GuildMemberRaw.ts';
import { wrapUser } from './User.ts';

export type GuildMember = ReturnType<typeof wrapGuildMember>;

export function wrapGuildMember(json: GuildMemberRaw) {
	return {
		...omit(json, 'joined_at', 'premium_since'),

		// Casing
		// joinedAt: json.joined_at,
		// premiumSince: json.premium_since,

		// Deserialization
		user: json.user && wrapUser(json.user),
		joinedAt: parseSerializedDate(json.joined_at),
		premiumSince: json.premium_since && parseSerializedDate(json.premium_since),
	};
}
