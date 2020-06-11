import { RoleId, UserId } from '../../type-aliases.ts';
import { AllowedMentionType } from '../AllowedMentionType.ts';

export interface AllowedMentionsRaw {
	/** An array of allowed mention types to parse from the content. */
	parse: AllowedMentionType[];
	/** Array of role_ids to mention (Max size of 100) */
	roles: RoleId[];
	/** Array of user_ids to mention (Max size of 100) */
	users: UserId[];
}
