import { PresenceUpdateEventRaw } from '../api/PresenceUpdateEventRaw.ts';
import { parseSerializedDate } from '../type-aliases.ts';
import { omit } from '../util/omit.ts';
import { wrapActivity } from './Activity.ts';
import { wrapClientStatus } from './ClientStatus.ts';
import { wrapUser } from './User.ts';

export type IPresenceUpdateEvent = ReturnType<typeof wrapPresenceUpdateEvent>;

export function wrapPresenceUpdateEvent(json: PresenceUpdateEventRaw) {
	return {
		...omit(json, 'guild_id', 'client_status', 'premium_since'),

		// Casing
		guildId: json.guild_id,
		// clientStatus: json.client_status,
		// premiumSince: json.premium_since,

		// Deserialization
		user: wrapUser(json.user),
		game: wrapActivity(json.game),
		activities: json.activities.map(wrapActivity),
		clientStatus: wrapClientStatus(json.client_status),
		premiumSince: json.premium_since && parseSerializedDate(json.premium_since),
	};
}
