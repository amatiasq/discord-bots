import { RawUser } from './RawUser.ts';

export interface RawBan {
	/** the reason for the ban */
	reason?: string;
	/** the banned user */
	user: RawUser;
}
