import { MessageActivityType } from '../enum/MessageActivityType.ts';

export interface RawMessageActivity {
	/** type of message activity */
	type: MessageActivityType;
	/** party_id from a Rich Presence event */
	party_id?: string;
}
