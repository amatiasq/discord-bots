import { RawGuildParams } from '../raw/RawGuildParams.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GuildParams {
	/** when true, will return approximate member and presence counts for the guild	DEFAULT: false */
	withCounts?: boolean;
}


export function wrapGuildParams(x: RawGuildParams): GuildParams {
	return fromApiCasing(x);
};

export function unwrapGuildParams(x: GuildParams): RawGuildParams {
	return toApiCasing(x);
};

export function wrapGuildParamsPartial(x: Partial<RawGuildParams>): Partial<GuildParams> {
	return fromApiCasing(x);
};

export function unwrapGuildParamsPartial(x: Partial<GuildParams>): Partial<RawGuildParams> {
	return toApiCasing(x);
};

