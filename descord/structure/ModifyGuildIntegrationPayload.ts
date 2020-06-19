import { RawModifyGuildIntegrationPayload } from '../raw/RawModifyGuildIntegrationPayload.ts';
import { integer } from '../type-aliases.ts';
import { IntegrationExpireBehavior } from '../enum/IntegrationExpireBehavior.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ModifyGuildIntegrationPayload {
	/** the behavior when an integration subscription lapses (see the integration expire behaviors documentation) */
	expireBehavior: IntegrationExpireBehavior;
	/** period (in days) where the integration will ignore lapsed subscriptions */
	expireGracePeriod: integer;
	/** whether emoticons should be synced for this integration (twitch only currently) */
	enableEmoticons: boolean;
}


export function wrapModifyGuildIntegrationPayload(x: RawModifyGuildIntegrationPayload): ModifyGuildIntegrationPayload {
	return fromApiCasing(x);
};

export function unwrapModifyGuildIntegrationPayload(x: ModifyGuildIntegrationPayload): RawModifyGuildIntegrationPayload {
	return toApiCasing(x);
};

