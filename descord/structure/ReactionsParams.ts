import { RawReactionsParams } from '../raw/RawReactionsParams.ts';
import { UserId, integer } from '../type-aliases.ts';

export interface ReactionsParams {
	/** get users before this user ID DEFAULT: absent */
	before?: UserId;
	/** get users after this user ID DEFAULT: absent */
	after?: UserId;
	/** max number of users to return (1-100) DEFAULT: 25 */
	limit?: integer;
}


export function wrapReactionsParams(x: RawReactionsParams): ReactionsParams {
	return x;
}

export function unwrapReactionsParams(x: ReactionsParams): RawReactionsParams {
	return x;
}

export const wrapReactionsParamsPartial = wrapReactionsParams as (x: Partial<RawReactionsParams>) => Partial<ReactionsParams>;

export const unwrapReactionsParamsPartial = unwrapReactionsParams as (x: Partial<ReactionsParams>) => Partial<RawReactionsParams>;


