import { MessageId } from '../type-aliases.ts';

export interface RawBulkDeleteMessagesPayload {
	/** an array of message ids to delete (2-100) */
	messages: MessageId[];
}
