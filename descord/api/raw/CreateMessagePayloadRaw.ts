import { AllowedMentionsRaw } from './AllowedMentionsRaw.ts';
import { EmbedRaw } from './EmbedRaw.ts';

export interface CreateMessagePayloadRaw {
	/** the message contents (up to 2000 characters) */
	content: string;
	/** a nonce that can be used for optimistic message sending */
	nonce: number | string;
	/** true if this is a TTS message */
	tts: boolean;
	/** the contents of the file being sent */
	file: string;
	/** embedded rich content */
	embed: EmbedRaw;
	/** JSON encoded body of any additional request fields. */
	payload_json: string;
	/** allowed mentions for a message */
	allowed_mentions: AllowedMentionsRaw;
}
