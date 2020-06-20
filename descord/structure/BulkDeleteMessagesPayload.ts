import { RawBulkDeleteMessagesPayload } from '../raw/RawBulkDeleteMessagesPayload.ts';
import { MessageId } from '../type-aliases.ts';

export interface BulkDeleteMessagesPayload {
	/** an array of message ids to delete (2-100) */
	messages: MessageId[];
}


export function wrapBulkDeleteMessagesPayload(x: RawBulkDeleteMessagesPayload): BulkDeleteMessagesPayload {
	return x;
};

export function unwrapBulkDeleteMessagesPayload(x: BulkDeleteMessagesPayload): RawBulkDeleteMessagesPayload {
	return x;
};

export function wrapBulkDeleteMessagesPayloadPartial(x: Partial<RawBulkDeleteMessagesPayload>): Partial<BulkDeleteMessagesPayload> {
	return x;
};

export function unwrapBulkDeleteMessagesPayloadPartial(x: Partial<BulkDeleteMessagesPayload>): Partial<RawBulkDeleteMessagesPayload> {
	return x;
};

