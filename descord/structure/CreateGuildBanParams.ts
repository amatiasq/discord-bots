import { RawCreateGuildBanParams } from '../raw/RawCreateGuildBanParams.ts';
import { integer } from '../type-aliases.ts';

export interface CreateGuildBanParams {
	/** number of days to delete messages for (0-7) */
	['delete-message-days']?: integer;
	/** reason for the ban */
	reason?: string;
}


export function wrapCreateGuildBanParams(x: RawCreateGuildBanParams): CreateGuildBanParams {
	return x;
}

export function unwrapCreateGuildBanParams(x: CreateGuildBanParams): RawCreateGuildBanParams {
	return x;
}

export const wrapCreateGuildBanParamsPartial = wrapCreateGuildBanParams as (x: Partial<RawCreateGuildBanParams>) => Partial<CreateGuildBanParams>;

export const unwrapCreateGuildBanParamsPartial = unwrapCreateGuildBanParams as (x: Partial<CreateGuildBanParams>) => Partial<RawCreateGuildBanParams>;


