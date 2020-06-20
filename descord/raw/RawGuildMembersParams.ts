import { integer, UserId } from '../type-aliases.ts';

export interface RawGuildMembersParams {
	/** max number of members to return (1-1000)	1 */
	limit?: integer;
	/** the highest user id in the previous page	0 */
	after?: UserId;
}
