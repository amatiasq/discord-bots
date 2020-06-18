import { RawCreateMessagePayload } from '../raw/RawCreateMessagePayload.ts';
import { AllowedMentions, wrapAllowedMentions, unwrapAllowedMentions } from './AllowedMentions.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface CreateMessagePayload {
	/** the message contents (up to 2000 characters) */
	content: string;
	/** a nonce that can be used for optimistic message sending */
	nonce?: number | string;
	/** true if this is a TTS message */
	tts?: boolean;
	/** the contents of the file being sent */
	file?: string;
	/** embedded rich content */
	embed?: Embed;
	/** allowed mentions for a message */
	allowedMentions?: AllowedMentions;

	// TODO: This should only be used if sending FormData
	/** JSON encoded body of any additional request fields. */
	payloadJson?: string;
}


export function wrapCreateMessagePayload(x: RawCreateMessagePayload): CreateMessagePayload {
	return {
		...fromApiCasing(x),
		embed: x.embed && wrapEmbed(x.embed),
		allowedMentions: x.allowed_mentions && wrapAllowedMentions(x.allowed_mentions),
	};
};

export function unwrapCreateMessagePayload(x: CreateMessagePayload): RawCreateMessagePayload {
	return {
		...toApiCasing(x),
		embed: x.embed && unwrapEmbed(x.embed),
		allowed_mentions: x.allowedMentions && unwrapAllowedMentions(x.allowedMentions),
	};
};

