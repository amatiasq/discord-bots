import { RawHeartbeatPayload } from '../raw/RawHeartbeatPayload.ts';


export interface HeartbeatPayload {
	/** the interval (in milliseconds) the client should heartbeat with */
	heartbeatInterval: number;
}


export function wrapHeartbeatPayload(x: RawHeartbeatPayload): HeartbeatPayload {
	return {
		...x,
		heartbeatInterval: x.heartbeat_interval,
	};
}

export function unwrapHeartbeatPayload(x: HeartbeatPayload): RawHeartbeatPayload {
	return {
		...x,
		heartbeat_interval: x.heartbeatInterval,
	};
}

export function wrapHeartbeatPayloadPartial(x: Partial<RawHeartbeatPayload>): Partial<HeartbeatPayload> {
	return {
		...x,
		heartbeatInterval: x.heartbeat_interval && x.heartbeat_interval,
	};
}

export function unwrapHeartbeatPayloadPartial(x: Partial<HeartbeatPayload>): Partial<RawHeartbeatPayload> {
	return {
		...x,
		heartbeat_interval: x.heartbeatInterval && x.heartbeatInterval,
	};
}


