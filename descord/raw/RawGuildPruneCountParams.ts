import { RoleId, integer } from '../type-aliases.ts';

export interface RawGuildPruneCountParams {
	/** number of days to count prune for (1 or more) DEFAULT: 7 */
	days?: integer;
	/** role(s) to include DEFAULT: none */
	include_roles?: RoleId[];
}
