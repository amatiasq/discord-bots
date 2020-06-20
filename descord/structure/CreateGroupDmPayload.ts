import { RawCreateGroupDmPayload } from '../raw/RawCreateGroupDmPayload.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface CreateGroupDmPayload {
	/** access tokens of users that have granted your app the gdm.join scope */
	accessTokens: string[];
	/** a dictionary of user ids to their respective nicknames */
	nicks: { [id: string]: string };
}


export function wrapCreateGroupDmPayload(x: RawCreateGroupDmPayload): CreateGroupDmPayload {
	return fromApiCasing(x);
}

export function unwrapCreateGroupDmPayload(x: CreateGroupDmPayload): RawCreateGroupDmPayload {
	return toApiCasing(x);
}

export const wrapCreateGroupDmPayloadPartial = wrapCreateGroupDmPayload as (x: Partial<RawCreateGroupDmPayload>) => Partial<CreateGroupDmPayload>;

export const unwrapCreateGroupDmPayloadPartial = unwrapCreateGroupDmPayload as (x: Partial<CreateGroupDmPayload>) => Partial<RawCreateGroupDmPayload>;


