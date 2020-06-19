import { RawBotGatewayData } from '../raw/RawBotGatewayData.ts';
import { GatewaySessionStartLimit, wrapGatewaySessionStartLimit, unwrapGatewaySessionStartLimit } from './GatewaySessionStartLimit.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface BotGatewayData {
	/** The WSS URL that can be used for connecting to the gateway. */
	url: string;
	/** The recommended number of shards to use when connecting. */
	shards: number;
	/** Info on the current start limit. */
	sessionStartLimit: GatewaySessionStartLimit;
}


export function wrapBotGatewayData(x: RawBotGatewayData): BotGatewayData {
	return {
		...fromApiCasing(x),
		sessionStartLimit: wrapGatewaySessionStartLimit(x.session_start_limit),
	};
};

export function unwrapBotGatewayData(x: BotGatewayData): RawBotGatewayData {
	return {
		...toApiCasing(x),
		session_start_limit: unwrapGatewaySessionStartLimit(x.sessionStartLimit),
	};
};

