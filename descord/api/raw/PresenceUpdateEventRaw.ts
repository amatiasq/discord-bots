import { GuildId, RoleId, SerializedDate } from '../../type-aliases.ts';
import { PresenceStatus } from '../enum/PresenceStatus.ts';
import { ActivityRaw } from './ActivityRaw.ts';
import { ClientStatusRaw } from './ClientStatusRaw.ts';
import { UserRaw } from './UserRaw.ts';

export interface PresenceUpdateEventRaw {
	/** the user presence is being updated for */
	user: UserRaw;
	/** roles this user is in */
	roles: RoleId[];
	/** null, or the user's current activity */
	game: ActivityRaw;
	/** id of the guild */
	guild_id: GuildId;
	/** either "idle", "dnd", "online", or "offline" */
	status: PresenceStatus;
	/** user's current activities */
	activities: ActivityRaw[];
	/** user's platform-dependent status */
	client_status: ClientStatusRaw;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premium_since?: SerializedDate;
	/** this users guild nickname (if one is set) */
	nick?: string;
}
