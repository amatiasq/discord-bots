import { RoleId, UserId } from '../../type-aliases.ts';
import { AllowedMentionType } from '../enum/AllowedMentionType.ts';

export interface RawAllowedMentions {
	/** An array of allowed mention types to parse from the content. */
	parse: AllowedMentionType[];
	/** Array of role_ids to mention (Max size of 100) */
	roles: RoleId[];
	/** Array of user_ids to mention (Max size of 100) */
	users: UserId[];
}
