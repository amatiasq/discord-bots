import { RawPresenceUpdateEvent } from '../raw/RawPresenceUpdateEvent.ts';
import { GuildId, RoleId, parseSerializedDate, unparseSerializedDate } from '../../type-aliases.ts';
import { PresenceStatus } from '../enum/PresenceStatus.ts';
import { Activity, wrapActivity, unwrapActivity } from './Activity.ts';
import { ClientStatus, wrapClientStatus, unwrapClientStatus } from './ClientStatus.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface PresenceUpdateEvent {
	/** the user presence is being updated for */
	user: User;
	/** roles this user is in */
	roles: RoleId[];
	/** null, or the user's current activity */
	game: Activity;
	/** id of the guild */
	guildId: GuildId;
	/** either "idle", "dnd", "online", or "offline" */
	status: PresenceStatus;
	/** user's current activities */
	activities: Activity[];
	/** user's platform-dependent status */
	clientStatus: ClientStatus;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premiumSince?: Date;
	/** this users guild nickname (if one is set) */
	nick?: string;
}


export function wrapPresenceUpdateEvent(x: RawPresenceUpdateEvent): PresenceUpdateEvent {
	return {
		...fromApiCasing(x),
		user: wrapUser(x.user),
		game: wrapActivity(x.game),
		activities: x.activities.map(wrapActivity),
		clientStatus: wrapClientStatus(x.client_status),
		premiumSince: x.premium_since && parseSerializedDate(x.premium_since),
	};
};

export function unwrapPresenceUpdateEvent(x: PresenceUpdateEvent): RawPresenceUpdateEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
		game: unwrapActivity(x.game),
		activities: x.activities.map(unwrapActivity),
		client_status: unwrapClientStatus(x.clientStatus),
		premium_since: x.premiumSince && unparseSerializedDate(x.premiumSince),
	};
};

