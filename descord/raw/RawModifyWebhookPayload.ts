import { ChannelId, ImageData } from '../type-aliases.ts';

export interface RawModifyWebhookPayload {
	/** the default name of the webhook */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
	/** the new channel id this webhook should be moved to */
	channel_id: ChannelId;
}
