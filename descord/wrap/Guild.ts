import { RawGuild } from '../raw/RawGuild.ts';
import {
	ApplicationId,
	ChannelId,
	GuildId,
	parsePermissionInteger, unparsePermissionInteger,
	snowflake,
	UserId,
} from '../../type-aliases.ts';
import { GuildFeature } from '../enum/GuildFeature.ts';
import { Emoji, wrapEmoji, unwrapEmoji } from './Emoji.ts';
import { Role, wrapRole, unwrapRole } from './Role.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface Guild {
	/** guild id */
	id: GuildId;
	/** guild name (2-100 characters, excluding trailing and leading whitespace) */
	name: string;
	/** icon hash */
	icon: string;
	/** splash hash */
	splash: string;
	/** discovery splash hash; only present for guilds with the "DISCOVERABLE" feature */
	discoverySplash: string;
	/** true if the user is the owner of the guild */
	owner?: boolean;
	/** id of owner */
	ownerId: UserId;
	/** total permissions for the user in the guild (excludes overrides) */
	permissions?: Permission[];
	/** voice region id for the guild */
	region: string;
	/** id of afk channel */
	afkChannelId: snowflake;
	/** afk timeout in seconds */
	afkTimeout: number;
	/** true if the server widget is enabled (deprecated, replaced with widgetEnabled) */
	embedEnabled?: boolean;
	/** the channel id that the widget will generate an invite to, or null if set to no invite (deprecated, replaced with widgetChannelId) */
	embedChannelId?: ChannelId;
	/** verification level required for the guild */
	verificationLevel: number;
	/** default message notifications level */
	defaultMessageNotifications: number;
	/** explicit content filter level */
	explicitContentFilter: number;
	/** roles in the guild */
	roles: Role[];
	/** custom guild emojis */
	emojis: Emoji[];
	/** enabled guild features */
	features: GuildFeature[];
	/** required MFA level for the guild */
	mfaLevel: number;
	/** application id of the guild creator if it is bot-created */
	applicationId: ApplicationId;
	/** true if the server widget is enabled */
	widgetEnabled?: boolean;
	/** the channel id that the widget will generate an invite to, or null if set to no invite */
	widgetChannelId?: ChannelId;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	systemChannelId: ChannelId;
	/** system channel flags */
	systemChannelFlags: number;
	/** the id of the channel where guilds with the "PUBLIC" feature can display rules and/or guidelines */
	rulesChannelId: ChannelId;
	/** the maximum number of presences for the guild (the default value, currently 25000, is in effect when null is returned) */
	maxPresences?: number;
	/** the maximum number of members for the guild */
	maxMembers?: number;
	/** the vanity url code for the guild */
	vanityUrlCode: string;
	/** the description for the guild, if the guild is discoverable */
	description: string;
	/** banner hash */
	banner: string;
	/** premium tier (Server Boost level) */
	premiumTier: number;
	/** the number of boosts this guild currently has */
	premiumSubscriptionCount?: number;
	/** the preferred locale of a guild with the "PUBLIC" feature; used in server discovery and notices from Discord; defaults to "en-US" */
	preferredLocale: string;
	/** the id of the channel where admins and moderators of guilds with the "PUBLIC" feature receive notices from Discord */
	publicUpdatesChannelId: ChannelId;
	/** the maximum amount of users in a video channel */
	maxVideoChannelUsers?: number;
	/** approximate number of members in this guild, returned from the GET /guild/<id> endpoint when withCounts is true */
	approximateMemberCount?: number;
	/** approximate number of non-offline members in this guild, returned from the GET /guild/<id> endpoint when withCounts is true */
	approximatePresenceCount?: number;
}


export function wrapGuild(x: RawGuild): Guild {
	return {
		...fromApiCasing(x),
		permissions: x.permissions && parsePermissionInteger(x.permissions),
		roles: x.roles.map(wrapRole),
		emojis: x.emojis.map(wrapEmoji),
	};
};

export function unwrapGuild(x: Guild): RawGuild {
	return {
		...toApiCasing(x),
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
		roles: x.roles.map(unwrapRole),
		emojis: x.emojis.map(unwrapEmoji),
	};
};

