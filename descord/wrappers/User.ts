import { omit } from '../util/omit.ts';
import { UserRaw } from '../api/UserRaw.ts';

export type IUser = ReturnType<typeof wrapUser>;

export function wrapUser(json: UserRaw) {
	return {
		...omit(json, 'mfa_enabled', 'premium_type', 'public_flags'),

		// Casing
		mfaEnabled: json.mfa_enabled,
		premiumType: json.premium_type,
		publicFlags: json.public_flags,
	};
}