import { RawMessageActivity } from '../raw/RawMessageActivity.ts';
import { MessageActivityType } from '../enum/MessageActivityType.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface MessageActivity {
	/** type of message activity */
	type: MessageActivityType;
	/** partyId from a Rich Presence event */
	partyId?: string;
}


export function wrapMessageActivity(x: RawMessageActivity): MessageActivity {
	return fromApiCasing(x);
}

export function unwrapMessageActivity(x: MessageActivity): RawMessageActivity {
	return toApiCasing(x);
}

export const wrapMessageActivityPartial = wrapMessageActivity as (x: Partial<RawMessageActivity>) => Partial<MessageActivity>;

export const unwrapMessageActivityPartial = unwrapMessageActivity as (x: Partial<MessageActivity>) => Partial<RawMessageActivity>;


