import { RawAllowedMentions } from '../raw/RawAllowedMentions.ts';
import { RoleId, UserId } from '../type-aliases.ts';
import { AllowedMentionType } from '../enum/AllowedMentionType.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface AllowedMentions {
	/** An array of allowed mention types to parse from the content. */
	parse: AllowedMentionType[];
	/** Array of roleIds to mention (Max size of 100) */
	roles: RoleId[];
	/** Array of userIds to mention (Max size of 100) */
	users: UserId[];
}


export function wrapAllowedMentions(x: RawAllowedMentions): AllowedMentions {
	return fromApiCasing(x);
}

export function unwrapAllowedMentions(x: AllowedMentions): RawAllowedMentions {
	return toApiCasing(x);
}

export const wrapAllowedMentionsPartial = wrapAllowedMentions as (x: Partial<RawAllowedMentions>) => Partial<AllowedMentions>;

export const unwrapAllowedMentionsPartial = unwrapAllowedMentions as (x: Partial<AllowedMentions>) => Partial<RawAllowedMentions>;


