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

export function wrapHeartbeatPayloadPartial(x: Partial<RawHeartbeatPayload>): Partial<HeartbeatPayload> {
	return fromApiCasing(x);
};

export function unwrapHeartbeatPayloadPartial(x: Partial<HeartbeatPayload>): Partial<RawHeartbeatPayload> {
	return toApiCasing(x);
};

