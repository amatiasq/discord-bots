export interface EmbedThumbnailRaw {
	/** source url of thumbnail (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the thumbnail */
	proxy_url?: string;
	/** height of thumbnail */
	height?: number;
	/** width of thumbnail */
	width?: number;
}
