import { UserId, integer } from '../type-aliases.ts';

export interface RawReactionsParams {
	/** get users before this user ID DEFAULT: absent */
	before?: UserId;
	/** get users after this user ID DEFAULT: absent */
	after?: UserId;
	/** max number of users to return (1-100) DEFAULT: 25 */
	limit?: integer;
}
