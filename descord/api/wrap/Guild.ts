import { parsePermissionInteger } from '../../type-aliases.ts';
import { omit } from '../../util/omit.ts';
import { GuildRaw } from '../raw/GuildRaw.ts';
import { wrapEmoji } from './Emoji.ts';
import { wrapRole } from './Role.ts';

export type Guild = ReturnType<typeof wrapGuild>;

export function wrapGuild(json: GuildRaw) {
	return {
		...omit(
			json,
			'discovery_splash',
			'owner_id',
			'afk_channel_id',
			'afk_timeout',
			'embed_enabled',
			'embed_channel_id',
			'verification_level',
			'default_message_notifications',
			'explicit_content_filter',
			'mfa_level',
			'application_id',
			'widget_enabled',
			'widget_channel_id',
			'system_channel_id',
			'system_channel_flags',
			'rules_channel_id',
			'max_presences',
			'max_members',
			'vanity_url_code',
			'premium_tier',
			'premium_subscription_count',
			'preferred_locale',
			'public_updates_channel_id',
			'max_video_channel_users',
			'approximate_member_count',
			'approximate_presence_count',
		),

		// Casing
		discoverySplash: json.discovery_splash,
		ownerId: json.owner_id,
		afkChannelId: json.afk_channel_id,
		afkTimeout: json.afk_timeout,
		embedEnabled: json.embed_enabled,
		embedChannelId: json.embed_channel_id,
		verificationLevel: json.verification_level,
		defaultMessageNotifications: json.default_message_notifications,
		explicitContentFilter: json.explicit_content_filter,
		mfaLevel: json.mfa_level,
		applicationId: json.application_id,
		widgetEnabled: json.widget_enabled,
		widgetChannelId: json.widget_channel_id,
		systemChannelId: json.system_channel_id,
		systemChannelFlags: json.system_channel_flags,
		rulesChannelId: json.rules_channel_id,
		maxPresences: json.max_presences,
		maxMembers: json.max_members,
		vanityUrlCode: json.vanity_url_code,
		premiumTier: json.premium_tier,
		premiumSubscriptionCount: json.premium_subscription_count,
		preferredLocale: json.preferred_locale,
		publicUpdatesChannelId: json.public_updates_channel_id,
		maxVideoChannelUsers: json.max_video_channel_users,
		approximateMemberCount: json.approximate_member_count,
		approximatePresenceCount: json.approximate_presence_count,

		// Deserialization
		permissions: json.permissions && parsePermissionInteger(json.permissions),
		roles: json.roles.map(wrapRole),
		emojis: json.emojis.map(wrapEmoji),
	};
}
