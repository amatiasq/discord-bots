import { integer } from '../type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#create-channel-invite-json-params

export interface RawCreateChannelInvitePayload {
	/**
	 * duration of invite in seconds before expiry, or 0 for never
	 * DEFAULT: 86400 (24 hours)
	 */
	max_age?: integer;
	/**
	 * max number of uses or 0 for unlimited
	 * DEFAULT: 0
	 */
	max_uses?: integer;
	/**
	 * whether this invite only grants temporary membership
	 * DEFAULT: false
	 */
	temporary?: boolean;
	/**
	 * if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)
	 * DEFAULT: false
	 */
	unique?: boolean;
	/** the target user id for this invite	 */
	target_user?: string;
	/** the type of target user for this invite	 */
	target_user_type?: integer;
}
