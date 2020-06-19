import { MessageId, ChannelId, GuildId } from '../type-aliases.ts';

export interface RawMessageReference {
	/** id of the originating message */
	message_id?: MessageId;
	/** id of the originating message's channel */
	channel_id: ChannelId;
	/** id of the originating message's guild */
	guild_id?: GuildId;
}