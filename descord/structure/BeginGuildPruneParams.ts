import { RawBeginGuildPruneParams } from '../raw/RawBeginGuildPruneParams.ts';
import { RoleId } from '../type-aliases';
import { integer } from '../type-aliases';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface BeginGuildPruneParams {
	/** number of days to prune (1 or more) DEFAULT: 7 */
	days?: integer;
	/** whether 'pruned' is returned, discouraged for large guilds DEFAULT: true */
	computePruneCount?: boolean;
	/** role(s) to include DEFAULT: none */
	includeRoles?: RoleId[];
}


export function wrapBeginGuildPruneParams(x: RawBeginGuildPruneParams): BeginGuildPruneParams {
	return fromApiCasing(x);
};

export function unwrapBeginGuildPruneParams(x: BeginGuildPruneParams): RawBeginGuildPruneParams {
	return toApiCasing(x);
};

