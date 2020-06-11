import { ActivityTimestampsRaw } from '../api/ActivityTimestampsRaw.ts';
import { parseSerializedUnixTimestamp } from '../type-aliases.ts';

export type IActivityTimestamps = ReturnType<typeof wrapActivityTimestamps>;

export function wrapActivityTimestamps(json: ActivityTimestampsRaw) {
	return {
		start: json.start && parseSerializedUnixTimestamp(json.start),
		end: json.end && parseSerializedUnixTimestamp(json.end),
	};
}
