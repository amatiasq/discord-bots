import { RawCurrentUserGuildsParams } from '../raw/RawCurrentUserGuildsParams.ts';
import { GuildId, integer } from '../type-aliases.ts';

export interface CurrentUserGuildsParams {
	/** get guilds before this guild ID DEFAULT: absent */
	before?: GuildId;
	/** get guilds after this guild ID DEFAULT: absent */
	after?: GuildId;
	/** max number of guilds to return (1-100) DEFAULT: 100 */
	limit?: integer;
}


export function wrapCurrentUserGuildsParams(x: RawCurrentUserGuildsParams): CurrentUserGuildsParams {
	return x;
};

export function unwrapCurrentUserGuildsParams(x: CurrentUserGuildsParams): RawCurrentUserGuildsParams {
	return x;
};

export function wrapCurrentUserGuildsParamsPartial(x: Partial<RawCurrentUserGuildsParams>): Partial<CurrentUserGuildsParams> {
	return x;
};

export function unwrapCurrentUserGuildsParamsPartial(x: Partial<CurrentUserGuildsParams>): Partial<RawCurrentUserGuildsParams> {
	return x;
};

