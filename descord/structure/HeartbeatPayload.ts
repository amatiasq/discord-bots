import { RawHeartbeatPayload } from '../raw/RawHeartbeatPayload.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface HeartbeatPayload {
	/** the interval (in milliseconds) the client should heartbeat with */
	heartbeatInterval: number;
}


export function wrapHeartbeatPayload(x: RawHeartbeatPayload): HeartbeatPayload {
	return fromApiCasing(x);
};

export function unwrapHeartbeatPayload(x: HeartbeatPayload): RawHeartbeatPayload {
	return toApiCasing(x);
};

