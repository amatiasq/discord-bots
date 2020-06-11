import { ActivityPartyRaw } from '../api/ActivityPartyRaw.ts';

export type ActivityParty = ReturnType<typeof wrapActivityParty>;

export function wrapActivityParty(json: ActivityPartyRaw) {
	return json;
}
