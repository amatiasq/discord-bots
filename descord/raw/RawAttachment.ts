import { AttachmentId, integer } from '../type-aliases.ts';

export interface RawAttachment {
	/** attachment id */
	id: AttachmentId;
	/** name of file attached */
	filename: string;
	/** size of file in bytes */
	size: integer;
	/** source url of file */
	url: string;
	/** a proxied url of file */
	proxy_url: string;
	/** height of file (if image) */
	height: integer;
	/** width of file (if image) */
	width: integer;
}
