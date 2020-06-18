import { RawEmbedThumbnail } from '../raw/RawEmbedThumbnail.ts';
import { integer } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface EmbedThumbnail {
	/** source url of thumbnail (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the thumbnail */
	proxyUrl?: string;
	/** height of thumbnail */
	height?: integer;
	/** width of thumbnail */
	width?: integer;
}


export function wrapEmbedThumbnail(x: RawEmbedThumbnail): EmbedThumbnail {
	return fromApiCasing(x);
};

export function unwrapEmbedThumbnail(x: EmbedThumbnail): RawEmbedThumbnail {
	return toApiCasing(x);
};

