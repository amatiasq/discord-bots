import { RawModifyCurrentUserPayload } from '../raw/RawModifyCurrentUserPayload.ts';
import { ImageData } from '../type-aliases.ts';

export interface ModifyCurrentUserPayload {
	/** user's username, if changed may cause the user's discriminator to be randomized. */
	username: string;
	/** if passed, modifies the user's avatar */
	avatar?: ImageData;
}


export function wrapModifyCurrentUserPayload(x: RawModifyCurrentUserPayload): ModifyCurrentUserPayload {
	return x;
};

export function unwrapModifyCurrentUserPayload(x: ModifyCurrentUserPayload): RawModifyCurrentUserPayload {
	return x;
};

