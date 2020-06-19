import { RawBan } from '../raw/RawBan.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface Ban {
	/** the reason for the ban */
	reason?: string;
	/** the banned user */
	user: User;
}


export function wrapBan(x: RawBan): Ban {
	return {
		...x,
		user: wrapUser(x.user),
	};
};

export function unwrapBan(x: Ban): RawBan {
	return {
		...x,
		user: unwrapUser(x.user),
	};
};

