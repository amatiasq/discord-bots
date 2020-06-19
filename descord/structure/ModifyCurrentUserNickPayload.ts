import { RawModifyCurrentUserNickPayload } from '../raw/RawModifyCurrentUserNickPayload.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ModifyCurrentUserNickPayload {
	/** value to set users nickname to (requires permission: CHANGENICKNAME) */
	nick?: string;
}


export function wrapModifyCurrentUserNickPayload(x: RawModifyCurrentUserNickPayload): ModifyCurrentUserNickPayload {
	return fromApiCasing(x);
};

export function unwrapModifyCurrentUserNickPayload(x: ModifyCurrentUserNickPayload): RawModifyCurrentUserNickPayload {
	return toApiCasing(x);
};

