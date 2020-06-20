import { UserId } from '../type-aliases.ts';

export interface RawCreateDmPayload {
	/** the recipient to open a DM channel with */
	recipient_id: UserId;
}
