import { RawAllowedMentions } from './RawAllowedMentions.ts';
import { RawEmbed } from './RawEmbed.ts';

export interface RawCreateMessagePayload {
	/** the message contents (up to 2000 characters) */
	content: string;
	/** a nonce that can be used for optimistic message sending */
	nonce?: number | string;
	/** true if this is a TTS message */
	tts?: boolean;
	/** the contents of the file being sent */
	file?: string;
	/** embedded rich content */
	embed?: RawEmbed;
	/** allowed mentions for a message */
	allowed_mentions?: RawAllowedMentions;

	// TODO: This should only be used if sending FormData
	/** JSON encoded body of any additional request fields. */
	// payload_json?: string;
}
