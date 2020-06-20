import { RawCreateGuildPayload } from '../raw/RawCreateGuildPayload.ts';
import {
	VoiceRegionId,
	ImageData,
	ChannelId,
	integer,
} from '../type-aliases.ts';
import { VerificationLevel } from '../enum/VerificationLevel.ts';
import { MessageNotificationLevel } from '../enum/MessageNotificationLevel.ts';
import { ExplicitContentFilterLevel } from '../enum/ExplicitContentFilterLevel.ts';
import { Role, wrapRole, unwrapRole } from './Role.ts';
import { Channel, wrapChannelPartial, unwrapChannelPartial } from './Channel.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface CreateGuildPayload {
	/** name of the guild (2-100 characters) */
	name: string;
	/** voice region id */
	region?: VoiceRegionId;
	/** base64 128x128 image for the guild icon */
	icon?: ImageData;
	/** verification level */
	verificationLevel?: VerificationLevel;
	/** default message notification level */
	defaultMessageNotifications?: MessageNotificationLevel;
	/** explicit content filter level */
	explicitContentFilter?: ExplicitContentFilterLevel;
	/** new guild roles */
	roles?: Role[];
	/** new guild's channels */
	channels?: Partial<Channel>[];
	/** id for afk channel */
	afkChannelId?: ChannelId;
	/** afk timeout in seconds */
	afkTimeout?: integer;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	systemChannelId?: ChannelId;
}


export function wrapCreateGuildPayload(x: RawCreateGuildPayload): CreateGuildPayload {
	return {
		...fromApiCasing(x),
		roles: x.roles && x.roles.map(wrapRole),
		channels: x.channels && x.channels.map(wrapChannelPartial),
	};
};

export function unwrapCreateGuildPayload(x: CreateGuildPayload): RawCreateGuildPayload {
	return {
		...toApiCasing(x),
		roles: x.roles && x.roles.map(unwrapRole),
		channels: x.channels && x.channels.map(unwrapChannelPartial),
	};
};

export function wrapCreateGuildPayloadPartial(x: Partial<RawCreateGuildPayload>): Partial<CreateGuildPayload> {
	return {
		...fromApiCasing(x),
		roles: x.roles && x.roles.map(wrapRole),
		channels: x.channels && x.channels.map(wrapChannelPartial),
	};
};

export function unwrapCreateGuildPayloadPartial(x: Partial<CreateGuildPayload>): Partial<RawCreateGuildPayload> {
	return {
		...toApiCasing(x),
		roles: x.roles && x.roles.map(unwrapRole),
		channels: x.channels && x.channels.map(unwrapChannelPartial),
	};
};

