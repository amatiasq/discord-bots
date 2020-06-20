import { RawGuildMembersParams } from '../raw/RawGuildMembersParams.ts';
import { integer, UserId } from '../type-aliases.ts';

export interface GuildMembersParams {
	/** max number of members to return (1-1000)	1 */
	limit?: integer;
	/** the highest user id in the previous page	0 */
	after?: UserId;
}


export function wrapGuildMembersParams(x: RawGuildMembersParams): GuildMembersParams {
	return x;
};

export function unwrapGuildMembersParams(x: GuildMembersParams): RawGuildMembersParams {
	return x;
};

export function wrapGuildMembersParamsPartial(x: Partial<RawGuildMembersParams>): Partial<GuildMembersParams> {
	return x;
};

export function unwrapGuildMembersParamsPartial(x: Partial<GuildMembersParams>): Partial<RawGuildMembersParams> {
	return x;
};

