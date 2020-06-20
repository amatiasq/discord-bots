import { ImageData } from '../type-aliases.ts';

export interface RawCreateWebhookPayload {
	/** name of the webhook (1-80 characters) */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
}
