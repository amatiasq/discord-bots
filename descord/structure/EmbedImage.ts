import { RawEmbedImage } from '../raw/RawEmbedImage.ts';
import { integer } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface EmbedImage {
	/** source url of image (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the image */
	proxyUrl?: string;
	/** height of image */
	height?: integer;
	/** width of image */
	width?: integer;
}


export function wrapEmbedImage(x: RawEmbedImage): EmbedImage {
	return fromApiCasing(x);
};

export function unwrapEmbedImage(x: EmbedImage): RawEmbedImage {
	return toApiCasing(x);
};

