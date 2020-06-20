import { RawEditMessagePayload } from '../raw/RawEditMessagePayload.ts';
import { MessageFlag } from '../enum/MessageFlag.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';

export interface EditMessagePayload {
	/** the new message contents (up to 2000 characters) */
	content: string;
	/** embedded rich content */
	embed: Embed;
	/** edit the flags of a message (only SUPPRESSEMBEDS can currently be set/unset) */
	flags: MessageFlag;
}


export function wrapEditMessagePayload(x: RawEditMessagePayload): EditMessagePayload {
	return {
		...x,
		embed: wrapEmbed(x.embed),
	};
}

export function unwrapEditMessagePayload(x: EditMessagePayload): RawEditMessagePayload {
	return {
		...x,
		embed: unwrapEmbed(x.embed),
	};
}

export function wrapEditMessagePayloadPartial(x: Partial<RawEditMessagePayload>): Partial<EditMessagePayload> {
	return {
		...x,
		embed: x.embed && wrapEmbed(x.embed),
	};
}

export function unwrapEditMessagePayloadPartial(x: Partial<EditMessagePayload>): Partial<RawEditMessagePayload> {
	return {
		...x,
		embed: x.embed && unwrapEmbed(x.embed),
	};
}


