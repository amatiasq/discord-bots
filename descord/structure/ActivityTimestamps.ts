import { RawActivityTimestamps } from '../raw/RawActivityTimestamps.ts';
import {
	parseSerializedUnixTimestamp,
	unparseSerializedUnixTimestamp,
} from '../type-aliases.ts';

export interface ActivityTimestamps {
	/** unix time (in milliseconds) of when the activity started */
	start?: Date;
	/** unix time (in milliseconds) of when the activity ends */
	end?: Date;
}

export function wrapActivityTimestamps(
	x: RawActivityTimestamps,
): ActivityTimestamps {
	return {
		...x,
		start: x.start && parseSerializedUnixTimestamp(x.start),
		end: x.end && parseSerializedUnixTimestamp(x.end),
	};
}

export function unwrapActivityTimestamps(
	x: ActivityTimestamps,
): RawActivityTimestamps {
	return {
		...x,
		start: x.start && unparseSerializedUnixTimestamp(x.start),
		end: x.end && unparseSerializedUnixTimestamp(x.end),
	};
}
