import { SerializedUnixTimestamp } from '../../type-aliases.ts';

export interface RawActivityTimestamps {
	/** unix time (in milliseconds) of when the activity started */
	start?: SerializedUnixTimestamp;
	/** unix time (in milliseconds) of when the activity ends */
	end?: SerializedUnixTimestamp;
}
