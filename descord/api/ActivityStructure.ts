import { snowflake } from '../type-aliases.ts';
import { ActivityTimestampsStructure } from './ActivityTimestampsStructure.ts';
import { ActivityEmojiStructure } from './ActivityEmojiStructure.ts';
import { ActivityPartyStructure } from './ActivityPartyStructure.ts';
import { ActivityAssetsStructure } from './ActivityAssetsStructure.ts';
import { ActivitySecretsStructure } from './ActivitySecretsStructure.ts';
import { ActivityFlags } from './ActivityFlags.ts';

export interface ActivityStructure {
	/** the activity's name */
	name: string;
	/** activity type */
	type: number;
	/** stream url, is validated when type is 1 */
	url?: string;
	/** unix timestamp of when the activity was added to the user's session */
	created_at: number;
	/** unix timestamps for start and/or end of the game */
	timestamps?: ActivityTimestampsStructure;
	/** application id for the game */
	application_id?: snowflake;
	/** what the player is currently doing */
	details?: string;
	/** the user's current party status */
	state?: string;
	/** the emoji used for a custom status */
	emoji?: ActivityEmojiStructure;
	/** information for the current party of the player */
	party?: ActivityPartyStructure;
	/** images for the presence and their hover texts */
	assets?: ActivityAssetsStructure;
	/** secrets for Rich Presence joining and spectating */
	secrets?: ActivitySecretsStructure;
	/** whether or not the activity is an instanced game session */
	instance?: boolean;
	/** activity flags ORd together, describes what the payload includes */
	flags?: ActivityFlags;
}
