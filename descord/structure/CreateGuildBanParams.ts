import { RawCreateGuildBanParams } from '../raw/RawCreateGuildBanParams.ts';
import { integer } from '../type-aliases';

export interface CreateGuildBanParams {
	/** number of days to delete messages for (0-7) */
	['delete-message-days']?: integer;
	/** reason for the ban */
	reason?: string;
}


export function wrapCreateGuildBanParams(x: RawCreateGuildBanParams): CreateGuildBanParams {
	return x;
};

export function unwrapCreateGuildBanParams(x: CreateGuildBanParams): RawCreateGuildBanParams {
	return x;
};

