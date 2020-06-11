import { integer } from '../type-aliases.ts';

export interface EmbedImageRaw {
	/** source url of image (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the image */
	proxy_url?: string;
	/** height of image */
	height?: integer;
	/** width of image */
	width?: integer;
}
