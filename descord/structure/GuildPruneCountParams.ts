import { RawGuildPruneCountParams } from '../raw/RawGuildPruneCountParams.ts';
import { RoleId, integer } from '../type-aliases.ts';

export interface GuildPruneCountParams {
	/** number of days to count prune for (1 or more) DEFAULT: 7 */
	days?: integer;
	/** role(s) to include DEFAULT: none */
	includeRoles?: RoleId[];
}


export function wrapGuildPruneCountParams(x: RawGuildPruneCountParams): GuildPruneCountParams {
	return {
		...x,
		includeRoles: x.include_roles && x.include_roles,
	};
}

export function unwrapGuildPruneCountParams(x: GuildPruneCountParams): RawGuildPruneCountParams {
	return {
		...x,
		include_roles: x.includeRoles && x.includeRoles,
	};
}

export const wrapGuildPruneCountParamsPartial = wrapGuildPruneCountParams as (x: Partial<RawGuildPruneCountParams>) => Partial<GuildPruneCountParams>;

export const unwrapGuildPruneCountParamsPartial = unwrapGuildPruneCountParams as (x: Partial<GuildPruneCountParams>) => Partial<RawGuildPruneCountParams>;


