import { ActivityPartyRaw } from '../api/ActivityPartyRaw.ts';

export type IActivityParty = ReturnType<typeof wrapActivityParty>;

export function wrapActivityParty(json: ActivityPartyRaw) {
	return json;
}
