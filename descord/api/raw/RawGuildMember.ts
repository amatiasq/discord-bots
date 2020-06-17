import { RoleId, SerializedDate } from '../../type-aliases.ts';
import { RawUser } from './RawUser.ts';

export interface RawGuildMember {
	/** the user this guild member represents */
	user?: RawUser;
	/** this users guild nickname */
	nick: string;
	/** array of role object ids */
	roles: RoleId[];
	/** when the user joined the guild (ISO8601 timestamp) */
	joined_at: SerializedDate;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premium_since?: SerializedDate;
	/** whether the user is deafened in voice channels */
	deaf: boolean;
	/** whether the user is muted in voice channels */
	mute: boolean;
}

