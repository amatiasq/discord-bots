import { RawActivityParty } from '../raw/RawActivityParty.ts';
import { PartyId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ActivityParty {
	/** the id of the party */
	id?: PartyId;
	/** used to show the party's current and maximum size. array of two integers (currentSize, maxSize) */
	size?: [number, number];
}


export function wrapActivityParty(x: RawActivityParty): ActivityParty {
	return fromApiCasing(x);
};

export function unwrapActivityParty(x: ActivityParty): RawActivityParty {
	return toApiCasing(x);
};

export function wrapActivityPartyPartial(x: Partial<RawActivityParty>): Partial<ActivityParty> {
	return fromApiCasing(x);
};

export function unwrapActivityPartyPartial(x: Partial<ActivityParty>): Partial<RawActivityParty> {
	return toApiCasing(x);
};

