import { RawMessageReference } from '../raw/RawMessageReference.ts';
import { MessageId, ChannelId, GuildId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface MessageReference {
	/** id of the originating message */
	messageId?: MessageId;
	/** id of the originating message's channel */
	channelId: ChannelId;
	/** id of the originating message's guild */
	guildId?: GuildId;
}


export function wrapMessageReference(x: RawMessageReference): MessageReference {
	return fromApiCasing(x);
};

export function unwrapMessageReference(x: MessageReference): RawMessageReference {
	return toApiCasing(x);
};

