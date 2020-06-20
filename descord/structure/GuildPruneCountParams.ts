import { RawGuildPruneCountParams } from '../raw/RawGuildPruneCountParams.ts';
import { RoleId, integer } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GuildPruneCountParams {
	/** number of days to count prune for (1 or more) DEFAULT: 7 */
	days?: integer;
	/** role(s) to include DEFAULT: none */
	includeRoles?: RoleId[];
}


export function wrapGuildPruneCountParams(x: RawGuildPruneCountParams): GuildPruneCountParams {
	return fromApiCasing(x);
}

export function unwrapGuildPruneCountParams(x: GuildPruneCountParams): RawGuildPruneCountParams {
	return toApiCasing(x);
}

export const wrapGuildPruneCountParamsPartial = wrapGuildPruneCountParams as (x: Partial<RawGuildPruneCountParams>) => Partial<GuildPruneCountParams>;

export const unwrapGuildPruneCountParamsPartial = unwrapGuildPruneCountParams as (x: Partial<GuildPruneCountParams>) => Partial<RawGuildPruneCountParams>;


