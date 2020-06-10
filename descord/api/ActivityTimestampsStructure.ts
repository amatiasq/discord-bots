import { SerializedUnixTimestamp } from '../type-aliases.ts';

export interface ActivityTimestampsStructure {
	/** unix time (in milliseconds) of when the activity started */
	start?: SerializedUnixTimestamp;
	/** unix time (in milliseconds) of when the activity ends */
	end?: SerializedUnixTimestamp;
}
