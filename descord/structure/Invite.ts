import { RawInvite } from '../raw/RawInvite.ts';
import { InviteId, integer } from '../type-aliases.ts';
import { TargetUserType } from '../enum/TargetUserType.ts';
import { Guild, wrapGuildPartial, unwrapGuildPartial } from './Guild.ts';
import { Channel, wrapChannelPartial, unwrapChannelPartial } from './Channel.ts';
import { User, wrapUserPartial, unwrapUserPartial } from './User.ts';
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
		guild: x.guild && wrapGuildPartial(x.guild),
		channel: wrapChannelPartial(x.channel),
		inviter: x.inviter && wrapUser(x.inviter),
		targetUser: x.target_user && wrapUserPartial(x.target_user),
	};
};

export function unwrapInvite(x: Invite): RawInvite {
	return {
		...toApiCasing(x),
		guild: x.guild && unwrapGuildPartial(x.guild),
		channel: unwrapChannelPartial(x.channel),
		inviter: x.inviter && unwrapUser(x.inviter),
		target_user: x.targetUser && unwrapUserPartial(x.targetUser),
	};
};

export function wrapInvitePartial(x: Partial<RawInvite>): Partial<Invite> {
	return {
		...fromApiCasing(x),
		guild: x.guild && wrapGuildPartial(x.guild),
		channel: x.channel && wrapChannelPartial(x.channel),
		inviter: x.inviter && wrapUser(x.inviter),
		targetUser: x.target_user && wrapUserPartial(x.target_user),
	};
};

export function unwrapInvitePartial(x: Partial<Invite>): Partial<RawInvite> {
	return {
		...toApiCasing(x),
		guild: x.guild && unwrapGuildPartial(x.guild),
		channel: x.channel && unwrapChannelPartial(x.channel),
		inviter: x.inviter && unwrapUser(x.inviter),
		target_user: x.targetUser && unwrapUserPartial(x.targetUser),
	};
};

