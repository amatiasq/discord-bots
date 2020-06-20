import { MessageFlag } from '../enum/MessageFlag.ts';
import { RawEmbed } from './RawEmbed.ts';

export interface RawEditMessagePayload {
	/** the new message contents (up to 2000 characters) */
	content?: string;
	/** embedded rich content */
	embed?: RawEmbed;
	/** edit the flags of a message (only SUPPRESS_EMBEDS can currently be set/unset) */
	flags?: MessageFlag;
}
