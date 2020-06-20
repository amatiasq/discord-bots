import { RawEditMessagePayload } from '../raw/RawEditMessagePayload.ts';
import { MessageFlag } from '../enum/MessageFlag.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

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
		...fromApiCasing(x),
		embed: wrapEmbed(x.embed),
	};
};

export function unwrapEditMessagePayload(x: EditMessagePayload): RawEditMessagePayload {
	return {
		...toApiCasing(x),
		embed: unwrapEmbed(x.embed),
	};
};

export function wrapEditMessagePayloadPartial(x: Partial<RawEditMessagePayload>): Partial<EditMessagePayload> {
	return {
		...fromApiCasing(x),
		embed: x.embed && wrapEmbed(x.embed),
	};
};

export function unwrapEditMessagePayloadPartial(x: Partial<EditMessagePayload>): Partial<RawEditMessagePayload> {
	return {
		...toApiCasing(x),
		embed: x.embed && unwrapEmbed(x.embed),
	};
};

