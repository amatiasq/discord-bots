import {
	ChannelId,
	MessageId,
	GuildId,
	UserId,
	EmojiId,
	IntegrationId,
	MemberId,
	RoleId,
} from '../type-aliases.ts';

/** Although, the version can be defaulted, keep the v6 as it can be changed to test newer versions when necessary. */
const BASE_URL = 'https://discord.com/api/v6';
const CDN_URL = 'https://cdn.discordapp.com';

export const GATEWAY_BOT = `${BASE_URL}/gateway/bot`;

//
// Channel Endpoints
//

export const CHANNEL_MESSAGE = (id: ChannelId, messageId: MessageId) =>
	`${BASE_URL}/channels/${id}/messages/${messageId}`;

export const CHANNEL_MESSAGES = (id: ChannelId) =>
	`${BASE_URL}/channels/${id}/messages`;

export const CHANNEL_PINS = (id: ChannelId) =>
	`${BASE_URL}/channels/${id}/pins`;

export const CHANNEL_BULK_DELETE = (id: ChannelId) =>
	`${BASE_URL}/channels/${id}/messages/bulk-delete`;

export const CHANNEL_INVITES = (id: ChannelId) =>
	`${BASE_URL}/channels/${id}/invites`;

export const CHANNEL_WEBHOOKS = (id: ChannelId) =>
	`${BASE_URL}/channels/${id}/webhooks`;

export const CHANNEL_MESSAGE_REACTION_ME = (
	id: ChannelId,
	messageId: MessageId,
	emoji: string,
) => `${BASE_URL}/channels/${id}/messages/${messageId}/reactions/${emoji}/@me`;

export const CHANNEL_MESSAGE_REACTIONS = (
	id: ChannelId,
	messageId: MessageId,
) => `${BASE_URL}/channels/${id}/messages/${messageId}/reactions`;

export const CHANNEL_MESSAGE_REACTION = (
	id: ChannelId,
	messageId: MessageId,
	emoji: string,
) => `${BASE_URL}/channels/${id}/messages/${messageId}/reactions/${emoji}`;

//
// Guild Endpoints
//

export const GUILD = (id: GuildId) => `${BASE_URL}/guilds/${id}`;

export const GUILD_AUDIT_LOGS = (id: GuildId) => `${GUILD(id)}/audit-logs`;

export const GUILD_BAN = (id: GuildId, userId: UserId) =>
	`${GUILD(id)}/bans/${userId}`;

export const GUILD_BANS = (id: GuildId) => `${GUILD(id)}/bans`;

export const GUILD_BANNER = (id: GuildId, icon: string) =>
	`${CDN_URL}/banners/${id}/${icon}`;

export const GUILD_CHANNELS = (id: GuildId) => `${GUILD(id)}/channels`;

export const GUILD_CHANNEL = (id: GuildId) => `${BASE_URL}/channels/${id}`;

export const GUILD_EMBED = (id: GuildId) => `${GUILD(id)}/embed`;

export const GUILD_EMOJI = (id: GuildId, emojiId: EmojiId) =>
	`${GUILD(id)}/emojis/${emojiId}`;

export const GUILD_EMOJIS = (id: GuildId) => `${GUILD(id)}/emojis`;

export const GUILD_ICON = (id: GuildId, icon: string) =>
	`${CDN_URL}/icons/${id}/${icon}`;

export const GUILD_INTEGRATION = (id: GuildId, integrationId: IntegrationId) =>
	`${GUILD(id)}/integrations/${integrationId}`;

export const GUILD_INTEGRATION_SYNC = (
	id: GuildId,
	integrationId: IntegrationId,
) => `${GUILD(id)}/integrations/${integrationId}/sync`;

export const GUILD_INTEGRATIONS = (id: GuildId) => `${GUILD(id)}/integrations`;

export const GUILD_INVITES = (id: GuildId) => `${GUILD(id)}/invites`;

export const GUILD_LEAVE = (id: GuildId) =>
	`${BASE_URL}/users/@me/guilds/${id}`;

export const GUILD_MEMBER = (id: GuildId, memberId: MemberId) =>
	`${GUILD(id)}/members/${memberId}`;

export const GUILD_MEMBER_ROLE = (
	id: GuildId,
	memberId: MemberId,
	roleId: string,
) => `${GUILD(id)}/members/${memberId}/roles/${roleId}`;

export const GUILD_PRUNE = (id: GuildId) => `${GUILD(id)}/prune`;

export const GUILD_REGIONS = (id: GuildId) => `${GUILD(id)}/regions`;

export const GUILD_ROLE = (id: GuildId, roleId: RoleId) =>
	`${GUILD(id)}/roles/${roleId}`;

export const GUILD_ROLES = (id: GuildId) => `${GUILD(id)}/roles`;

export const GUILD_SPLASH = (id: GuildId, icon: RoleId) =>
	`${CDN_URL}/splashes/${id}/${icon}`;

export const GUILD_VANITY_URL = (id: GuildId) => `${GUILD(id)}/vanity-url`;

export const GUILD_WEBHOOKS = (id: GuildId) => `${GUILD(id)}/webhooks`;

//
// User endpoints
//

export const USER_AVATAR = (id: UserId, icon: string) =>
	`${CDN_URL}/avatars/${id}/${icon}`;

export const USER_DEFAULT_AVATAR = (icon: number) =>
	`${CDN_URL}/embed/avatars${icon}.png`;

export const USER_CREATE_DM = `${BASE_URL}/users/@me/channels`;
