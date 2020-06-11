import { ApplicationId, SerializedUnixTimestamp } from '../../type-aliases.ts';
import { ActivityFlag } from '../ActivityFlag.ts';
import { ActivityAssetsRaw } from './ActivityAssetsRaw.ts';
import { ActivityEmojiRaw } from './ActivityEmojiRaw.ts';
import { ActivityPartyRaw } from './ActivityPartyRaw.ts';
import { ActivitySecretsRaw } from './ActivitySecretsRaw.ts';
import { ActivityTimestampsRaw } from './ActivityTimestampsRaw.ts';

export interface ActivityRaw {
	/** the activity's name */
	name: string;
	/** activity type */
	type: number;
	/** stream url, is validated when type is 1 */
	url?: string;
	/** unix timestamp of when the activity was added to the user's session */
	created_at: SerializedUnixTimestamp;
	/** unix timestamps for start and/or end of the game */
	timestamps?: ActivityTimestampsRaw;
	/** application id for the game */
	application_id?: ApplicationId;
	/** what the player is currently doing */
	details?: string;
	/** the user's current party status */
	state?: string;
	/** the emoji used for a custom status */
	emoji?: ActivityEmojiRaw;
	/** information for the current party of the player */
	party?: ActivityPartyRaw;
	/** images for the presence and their hover texts */
	assets?: ActivityAssetsRaw;
	/** secrets for Rich Presence joining and spectating */
	secrets?: ActivitySecretsRaw;
	/** whether or not the activity is an instanced game session */
	instance?: boolean;
	/** activity flags ORd together, describes what the payload includes */
	flags?: ActivityFlag;
}
