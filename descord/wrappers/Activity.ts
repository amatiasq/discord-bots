import { omit } from '../util/omit.ts';
import { ActivityRaw } from '../api/ActivityRaw.ts';
import { wrapActivityTimestamps } from './ActivityTimestamps.ts';
import { wrapActivityEmoji } from './ActivityEmoji.ts';
import { wrapActivityParty } from './ActivityParty.ts';
import { wrapActivityAssets } from './ActivityAssets.ts';
import { wrapActivitySecrets } from './ActivitySecrets.ts';
import { parseSerializedUnixTimestamp } from '../type-aliases.ts';

export type Activity = ReturnType<typeof wrapActivity>;

export function wrapActivity(json: ActivityRaw) {
	return {
		...omit(json, 'application_id', 'created_at'),

		// Casing
		applicationId: json.application_id,
		// createdAt: json.created_at,

		// Deserialization
		createdAt: parseSerializedUnixTimestamp(json.created_at),
		timestamps: json.timestamps && wrapActivityTimestamps(json.timestamps),
		emoji: json.emoji && wrapActivityEmoji(json.emoji),
		party: json.party && wrapActivityParty(json.party),
		assets: json.assets && wrapActivityAssets(json.assets),
		secrets: json.secrets && wrapActivitySecrets(json.secrets),
	};
}
