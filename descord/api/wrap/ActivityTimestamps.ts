import { parseSerializedUnixTimestamp } from '../../type-aliases.ts';
import { ActivityTimestampsRaw } from '../raw/ActivityTimestampsRaw.ts';

export type ActivityTimestamps = ReturnType<typeof wrapActivityTimestamps>;

export function wrapActivityTimestamps(json: ActivityTimestampsRaw) {
	return {
		start: json.start && parseSerializedUnixTimestamp(json.start),
		end: json.end && parseSerializedUnixTimestamp(json.end),
	};
}
