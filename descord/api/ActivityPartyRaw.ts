import { PartyId } from '../type-aliases.ts';

export interface ActivityPartyRaw {
	/** the id of the party */
	id?: PartyId;
	/** used to show the party's current and maximum size. array of two integers (current_size, max_size) */
	size?: [number, number];
}
