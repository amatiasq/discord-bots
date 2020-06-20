import { RawAttachment } from '../raw/RawAttachment.ts';
import { AttachmentId, integer } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface Attachment {
	/** attachment id */
	id: AttachmentId;
	/** name of file attached */
	filename: string;
	/** size of file in bytes */
	size: integer;
	/** source url of file */
	url: string;
	/** a proxied url of file */
	proxyUrl: string;
	/** height of file (if image) */
	height: integer;
	/** width of file (if image) */
	width: integer;
}


export function wrapAttachment(x: RawAttachment): Attachment {
	return fromApiCasing(x);
};

export function unwrapAttachment(x: Attachment): RawAttachment {
	return toApiCasing(x);
};

export function wrapAttachmentPartial(x: Partial<RawAttachment>): Partial<Attachment> {
	return fromApiCasing(x);
};

export function unwrapAttachmentPartial(x: Partial<Attachment>): Partial<RawAttachment> {
	return toApiCasing(x);
};

