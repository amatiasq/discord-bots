import { RawEmbedAuthor } from '../raw/RawEmbedAuthor.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface EmbedAuthor {
	/** name of author */
	name?: string;
	/** url of author */
	url?: string;
	/** url of author icon (only supports http(s) and attachments) */
	iconUrl?: string;
	/** a proxied url of author icon */
	proxyIconUrl?: string;
}


export function wrapEmbedAuthor(x: RawEmbedAuthor): EmbedAuthor {
	return fromApiCasing(x);
}

export function unwrapEmbedAuthor(x: EmbedAuthor): RawEmbedAuthor {
	return toApiCasing(x);
}

export const wrapEmbedAuthorPartial = wrapEmbedAuthor as (x: Partial<RawEmbedAuthor>) => Partial<EmbedAuthor>;

export const unwrapEmbedAuthorPartial = unwrapEmbedAuthor as (x: Partial<EmbedAuthor>) => Partial<RawEmbedAuthor>;


