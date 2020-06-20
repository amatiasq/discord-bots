import { ImageData } from '../type-aliases.ts';

export interface RawModifyCurrentUserPayload {
	/** user's username, if changed may cause the user's discriminator to be randomized. */
	username: string;
	/** if passed, modifies the user's avatar */
	avatar?: ImageData;
}
