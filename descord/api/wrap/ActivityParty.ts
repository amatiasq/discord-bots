import { ActivityPartyRaw } from '../raw/ActivityPartyRaw.ts';

export type ActivityParty = ReturnType<typeof wrapActivityParty>;

export function wrapActivityParty(json: ActivityPartyRaw) {
	return json;
}
