import { UserRaw } from './UserRaw.ts';
import { RoleId, SerializedDate } from '../type-aliases.ts';

export interface GuildMemberRaw {
	/** the user this guild member represents */
	user?: UserRaw;
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
