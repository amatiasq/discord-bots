import { RawCreateChannelInvitePayload } from '../raw/RawCreateChannelInvitePayload.ts';
import { integer } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface CreateChannelInvitePayload {
	/**
	 * duration of invite in seconds before expiry, or 0 for never
	 * DEFAULT: 86400 (24 hours)
	 */
	maxAge: integer;
	/**
	 * max number of uses or 0 for unlimited
	 * DEFAULT: 0
	 */
	maxUses: integer;
	/**
	 * whether this invite only grants temporary membership
	 * DEFAULT: false
	 */
	temporary: boolean;
	/**
	 * if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)
	 * DEFAULT: false
	 */
	unique: boolean;
	/** the target user id for this invite	 */
	targetUser?: string;
	/** the type of target user for this invite	 */
	targetUserType?: integer;
}


export function wrapCreateChannelInvitePayload(x: RawCreateChannelInvitePayload): CreateChannelInvitePayload {
	return fromApiCasing(x);
}

export function unwrapCreateChannelInvitePayload(x: CreateChannelInvitePayload): RawCreateChannelInvitePayload {
	return toApiCasing(x);
}

export const wrapCreateChannelInvitePayloadPartial = wrapCreateChannelInvitePayload as (x: Partial<RawCreateChannelInvitePayload>) => Partial<CreateChannelInvitePayload>;

export const unwrapCreateChannelInvitePayloadPartial = unwrapCreateChannelInvitePayload as (x: Partial<CreateChannelInvitePayload>) => Partial<RawCreateChannelInvitePayload>;


