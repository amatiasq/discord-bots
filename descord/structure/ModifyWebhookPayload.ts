import { RawModifyWebhookPayload } from '../raw/RawModifyWebhookPayload.ts';
import { ChannelId, ImageData } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ModifyWebhookPayload {
	/** the default name of the webhook */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
	/** the new channel id this webhook should be moved to */
	channelId: ChannelId;
}


export function wrapModifyWebhookPayload(x: RawModifyWebhookPayload): ModifyWebhookPayload {
	return fromApiCasing(x);
}

export function unwrapModifyWebhookPayload(x: ModifyWebhookPayload): RawModifyWebhookPayload {
	return toApiCasing(x);
}

export const wrapModifyWebhookPayloadPartial = wrapModifyWebhookPayload as (x: Partial<RawModifyWebhookPayload>) => Partial<ModifyWebhookPayload>;

export const unwrapModifyWebhookPayloadPartial = unwrapModifyWebhookPayload as (x: Partial<ModifyWebhookPayload>) => Partial<RawModifyWebhookPayload>;


