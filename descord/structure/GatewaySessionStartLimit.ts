import { RawGatewaySessionStartLimit } from '../raw/RawGatewaySessionStartLimit.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GatewaySessionStartLimit {
	/** The total number of session starts the current user is allowed. */
	total: number;
	/** The remaining number of session starts the current user is allowed. */
	remaining: number;
	/** Milliseconds left until limit is reset. */
	resetAfter: number;
}


export function wrapGatewaySessionStartLimit(x: RawGatewaySessionStartLimit): GatewaySessionStartLimit {
	return fromApiCasing(x);
};

export function unwrapGatewaySessionStartLimit(x: GatewaySessionStartLimit): RawGatewaySessionStartLimit {
	return toApiCasing(x);
};

export function wrapGatewaySessionStartLimitPartial(x: Partial<RawGatewaySessionStartLimit>): Partial<GatewaySessionStartLimit> {
	return fromApiCasing(x);
};

export function unwrapGatewaySessionStartLimitPartial(x: Partial<GatewaySessionStartLimit>): Partial<RawGatewaySessionStartLimit> {
	return toApiCasing(x);
};

