import { omit } from '../../util/omit.ts';
import { CreateMessagePayloadRaw } from '../raw/CreateMessagePayloadRaw.ts';
import { Embed, unwrapEmbed } from './Embed.ts';
import { AllowedMentions, unwrapAllowedMentions } from './AllowedMentions.ts';

export interface CreateMessagePayload {
	content: string;
	nonce: number | string;
	tts: boolean;
	file: string;
	embed: Embed;
	payloadJson: string;
	allowedMentions: AllowedMentions;
}

export function unwrapCreateMessagePayload(
	x: CreateMessagePayload,
): CreateMessagePayloadRaw {
	return {
		...omit(x, 'payloadJson', 'allowedMentions'),

		// Casing
		payload_json: x.payloadJson,
		// allowed_mentions: x.allowedMentions,

		// Serialize
		embed: unwrapEmbed(x.embed),
		allowed_mentions: unwrapAllowedMentions(x.allowedMentions),
	};
}
