import { RawInvite } from '../raw/RawInvite.ts';
import { InviteId, integer } from '../type-aliases.ts';
import { TargetUserType } from '../enum/TargetUserType.ts';
import { Guild, wrapGuild, unwrapGuild } from './Guild.ts';
import { Channel, wrapChannel, unwrapChannel } from './Channel.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface Invite {
	/** the invite code (unique ID) */
	code: InviteId;
	/** the guild this invite is for */
	guild?: Partial<Guild>;
	/** the channel this invite is for */
	channel: Partial<Channel>;
	/** the user who created the invite */
	inviter?: User;
	/** the target user for this invite */
	targetUser?: Partial<User>;
	/** the type of user target for this invite */
	targetUserType?: TargetUserType;
	/** approximate count of online members (only present when targetUser is set) */
	approximatePresenceCount?: integer;
	/** approximate count of total members */
	approximateMemberCount?: integer;
}


export function wrapInvite(x: RawInvite): Invite {
	return {
		...fromApiCasing(x),
		inviter: x.inviter && wrapUser(x.inviter),
	};
};

export function unwrapInvite(x: Invite): RawInvite {
	return {
		...toApiCasing(x),
		inviter: x.inviter && unwrapUser(x.inviter),
	};
};

