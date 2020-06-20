import { RawCreateDmPayload } from '../raw/RawCreateDmPayload.ts';
import { UserId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface CreateDmPayload {
	/** the recipient to open a DM channel with */
	recipientId: UserId;
}


export function wrapCreateDmPayload(x: RawCreateDmPayload): CreateDmPayload {
	return fromApiCasing(x);
};

export function unwrapCreateDmPayload(x: CreateDmPayload): RawCreateDmPayload {
	return toApiCasing(x);
};

