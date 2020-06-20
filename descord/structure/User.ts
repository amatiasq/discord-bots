import { RawUser } from '../raw/RawUser.ts';
import { UserId, ImageData, UserFlag, parseUserFlagInteger, unparseUserFlagInteger } from '../type-aliases.ts';
import { PremiumType } from '../enum/PremiumType.ts';

export interface User {
	/** the user's id	identify */
	id: UserId;
	/** the user's username, not unique across the platform	identify */
	username: string;
	/** the user's 4-digit discord-tag	identify */
	discriminator: string;
	/** the user's avatar hash	identify */
	avatar: ImageData;
	/** whether the user belongs to an OAuth2 application	identify */
	bot?: boolean;
	/** whether the user is an Official Discord System user (part of the urgent message system)	identify */
	system?: boolean;
	/** whether the user has two factor enabled on their account	identify */
	mfaEnabled?: boolean;
	/** the user's chosen language option	identify */
	locale?: string;
	/** whether the email on this account has been verified	email */
	verified?: boolean;
	/** the user's email	email */
	email?: string;
	/** the flags on a user's account	identify */
	flags?: UserFlagInteger[];
	/** the type of Nitro subscription on a user's account	identify */
	premiumType?: PremiumType;
	/** the public flags on a user's account	identify */
	publicFlags?: UserFlagInteger[];
}


export function wrapUser(x: RawUser): User {
	return {
		...x,
		mfaEnabled: x.mfa_enabled && x.mfa_enabled,
		flags: x.flags && parseUserFlagInteger(x.flags),
		premiumType: x.premium_type && x.premium_type,
		publicFlags: x.public_flags && parseUserFlagInteger(x.public_flags),
	};
}

export function unwrapUser(x: User): RawUser {
	return {
		...x,
		mfa_enabled: x.mfaEnabled && x.mfaEnabled,
		flags: x.flags && unparseUserFlagInteger(x.flags),
		premium_type: x.premiumType && x.premiumType,
		public_flags: x.publicFlags && unparseUserFlagInteger(x.publicFlags),
	};
}

export const wrapUserPartial = wrapUser as (x: Partial<RawUser>) => Partial<User>;

export const unwrapUserPartial = unwrapUser as (x: Partial<User>) => Partial<RawUser>;


