import { RawEmbedFooter } from '../raw/RawEmbedFooter.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface EmbedFooter {
	/** footer text */
	text: string;
	/** url of footer icon (only supports http(s) and attachments) */
	iconUrl?: string;
	/** a proxied url of footer icon */
	proxyIconUrl?: string;
}


export function wrapEmbedFooter(x: RawEmbedFooter): EmbedFooter {
	return fromApiCasing(x);
};

export function unwrapEmbedFooter(x: EmbedFooter): RawEmbedFooter {
	return toApiCasing(x);
};

