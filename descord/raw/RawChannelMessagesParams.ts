import { MessageId, integer } from '../type-aliases.ts';

export interface RawChannelMessagesParams {
	/** get messages around this message ID DEFAULT: absent */
	around?: MessageId;
	/** get messages before this message ID DEFAULT: absent */
	before?: MessageId;
	/** get messages after this message ID DEFAULT: absent */
	after?: MessageId;
	/** max number of messages to return (1-100) DEFAULT: 50 */
	limit?: integer;
}
