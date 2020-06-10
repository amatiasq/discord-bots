import { GuildId, RoleId, SerializedDate } from '../type-aliases.ts';
import { ActivityStructure } from './ActivityStructure.ts';
import { ClientStatusStructure } from './ClientStatusStructure.ts';
import { PresenceStatus } from './PresenceStatus.ts';
import { UserStructure } from './UserStructure.ts';

export interface PresenceUpdateEventStructure {
	/** the user presence is being updated for */
	user: UserStructure;
	/** roles this user is in */
	roles: RoleId[];
	/** null, or the user's current activity */
	game: ActivityStructure;
	/** id of the guild */
	guild_id: GuildId;
	/** either "idle", "dnd", "online", or "offline" */
	status: PresenceStatus;
	/** user's current activities */
	activities: ActivityStructure[];
	/** user's platform-dependent status */
	client_status: ClientStatusStructure;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premium_since?: SerializedDate;
	/** this users guild nickname (if one is set) */
	nick?: string;
}
