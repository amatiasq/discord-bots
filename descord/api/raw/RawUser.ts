import { UserId } from '../../type-aliases.ts';

export interface RawUser {
	/** the user's id	identify */
	id: UserId;
	/** the user's username, not unique across the platform	identify */
	username: string;
	/** the user's 4-digit discord-tag	identify */
	discriminator: string;
	/** the user's avatar hash	identify */
	avatar: string;
	/** whether the user belongs to an OAuth2 application	identify */
	bot?: boolean;
	/** whether the user is an Official Discord System user (part of the urgent message system)	identify */
	system?: boolean;
	/** whether the user has two factor enabled on their account	identify */
	mfa_enabled?: boolean;
	/** the user's chosen language option	identify */
	locale?: string;
	/** whether the email on this account has been verified	email */
	verified?: boolean;
	/** the user's email	email */
	email?: string;
	/** the flags on a user's account	identify */
	flags?: number;
	/** the type of Nitro subscription on a user's account	identify */
	premium_type?: number;
	/** the public flags on a user's account	identify */
	public_flags?: number;
}
