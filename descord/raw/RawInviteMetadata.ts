import { integer, ISO8601Timestamp } from '../type-aliases.ts';

export interface RawInviteMetadata {
	/** number of times this invite has been used */
	uses: integer;
	/** max number of times this invite can be used */
	max_uses: integer;
	/** duration (in seconds) after which the invite expires */
	max_age: integer;
	/** whether this invite only grants temporary membership */
	temporary: boolean;
	/** when this invite was created */
	created_at: ISO8601Timestamp;
}
