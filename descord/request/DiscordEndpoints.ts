import { RawAuditLog } from '../raw/RawAuditLog.ts';
import { RawBan } from '../raw/RawBan.ts';
import { RawChannel } from '../raw/RawChannel.ts';
import { RawEmoji } from '../raw/RawEmoji.ts';
import { RawGuild } from '../raw/RawGuild.ts';
import { RawGuildMember } from '../raw/RawGuildMember.ts';
import { RawGuildPreview } from '../raw/RawGuildPreview.ts';
import { RawGuildWidget } from '../raw/RawGuildWidget.ts';
import { RawIntegration } from '../raw/RawIntegration.ts';
import { RawInvite } from '../raw/RawInvite.ts';
import { RawMessage } from '../raw/RawMessage.ts';
import { RawRole } from '../raw/RawRole.ts';
import { RawUser } from '../raw/RawUser.ts';
import { RawVoiceRegion } from '../raw/RawVoiceRegion.ts';
import {
	AddGuildMemberPayload,
	unwrapAddGuildMemberPayload,
} from '../structure/AddGuildMemberPayload.ts';
import { wrapAuditLog } from '../structure/AuditLog.ts';
import { wrapBan } from '../structure/Ban.ts';
import {
	BeginGuildPruneParams,
	unwrapBeginGuildPruneParams,
} from '../structure/BeginGuildPruneParams.ts';
import {
	BulkDeleteMessagesPayload,
	unwrapBulkDeleteMessagesPayload,
} from '../structure/BulkDeleteMessagesPayload.ts';
import { wrapChannel } from '../structure/Channel.ts';
import {
	ChannelMessagesParams,
	unwrapChannelMessagesParams,
} from '../structure/ChannelMessagesParams.ts';
import {
	CreateChannelInvitePayload,
	unwrapCreateChannelInvitePayload,
} from '../structure/CreateChannelInvitePayload.ts';
import {
	CreateGuildBanParams,
	unwrapCreateGuildBanParams,
} from '../structure/CreateGuildBanParams.ts';
import {
	CreateGuildChannelPayload,
	unwrapCreateGuildChannelPayload,
} from '../structure/CreateGuildChannelPayload.ts';
import {
	CreateGuildEmojiPayload,
	unwrapCreateGuildEmojiPayload,
} from '../structure/CreateGuildEmojiPayload.ts';
import {
	CreateGuildIntegrationPayload,
	unwrapCreateGuildIntegrationPayload,
} from '../structure/CreateGuildIntegrationPayload.ts';
import {
	CreateGuildPayload,
	unwrapCreateGuildPayload,
} from '../structure/CreateGuildPayload.ts';
import {
	CreateGuildRolePayload,
	unwrapCreateGuildRolePayload,
} from '../structure/CreateGuildRolePayload.ts';
import {
	CreateMessagePayload,
	unwrapCreateMessagePayload,
} from '../structure/CreateMessagePayload.ts';
import {
	EditChannelPermissionsPayload,
	unwrapEditChannelPermissionsPayload,
} from '../structure/EditChannelPermissionsPayload.ts';
import {
	EditMessagePayload,
	unwrapEditMessagePayload,
} from '../structure/EditMessagePayload.ts';
import { wrapEmoji } from '../structure/Emoji.ts';
import {
	GroupDmAddRecipientPayload,
	unwrapGroupDmAddRecipientPayload,
} from '../structure/GroupDmAddRecipientPayload.ts';
import { wrapGuild } from '../structure/Guild.ts';
import { wrapGuildMember } from '../structure/GuildMember.ts';
import { GuildMembersParams } from '../structure/GuildMembersParams.ts';
import { GuildParams, unwrapGuildParams } from '../structure/GuildParams.ts';
import { wrapGuildPreview } from '../structure/GuildPreview.ts';
import {
	GuildPruneCountParams,
	unwrapGuildPruneCountParams,
} from '../structure/GuildPruneCountParams.ts';
import {
	GuildWidget,
	unwrapGuildWidgetPartial,
	wrapGuildWidget,
} from '../structure/GuildWidget.ts';
import {
	GuildWidgetImageParams,
	unwrapGuildWidgetImageParams,
} from '../structure/GuildWidgetImageParams.ts';
import { wrapIntegration } from '../structure/Integration.ts';
import { wrapInvite, wrapInvitePartial } from '../structure/Invite.ts';
import { wrapMessage } from '../structure/Message.ts';
import {
	ModifyChannelPayload,
	unwrapModifyChannelPayload,
} from '../structure/ModifyChannelPayload.ts';
import {
	ModifyCurrentUserPayload,
	unwrapModifyCurrentUserPayload,
} from '../structure/ModifyCurrentUserPayload.ts';
import {
	ModifyGuildChannelPositionsPayload,
	unwrapModifyGuildChannelPositionsPayload,
} from '../structure/ModifyGuildChannelPositionsPayload.ts';
import {
	ModifyGuildEmojiPayload,
	unwrapModifyGuildEmojiPayload,
} from '../structure/ModifyGuildEmojiPayload.ts';
import {
	ModifyGuildIntegrationPayload,
	unwrapModifyGuildIntegrationPayload,
} from '../structure/ModifyGuildIntegrationPayload.ts';
import {
	ModifyGuildMemberPayload,
	unwrapModifyGuildMemberPayload,
} from '../structure/ModifyGuildMemberPayload.ts';
import { ModifyGuildPayload } from '../structure/ModifyGuildPayload.ts';
import {
	ModifyGuildRolePayload,
	unwrapModifyGuildRolePayload,
} from '../structure/ModifyGuildRolePayload.ts';
import {
	ModifyGuildRolePositionsPayload,
	unwrapModifyGuildRolePositionsPayload,
} from '../structure/ModifyGuildRolePositionsPayload.ts';
import {
	ReactionsParams,
	unwrapReactionsParams,
} from '../structure/ReactionsParams.ts';
import { wrapRole } from '../structure/Role.ts';
import { wrapVoiceRegion } from '../structure/VoiceRegion.ts';
import {
	ChannelId,
	EmojiId,
	GuildId,
	IntegrationId,
	MessageId,
	OverwriteId,
	Permission,
	RoleId,
	UserId,
} from '../type-aliases.ts';
import { ApiCaller } from './ApiCaller.ts';
import {
	CHANNEL,
	CHANNEL_BULK_DELETE,
	CHANNEL_INVITES,
	CHANNEL_MESSAGE,
	CHANNEL_MESSAGE_REACTION,
	CHANNEL_MESSAGE_REACTION_USER,
	CHANNEL_MESSAGE_REACTIONS,
	CHANNEL_MESSAGES,
	CHANNEL_PERMISSIONS,
	CHANNEL_PINNED_MESSAGE,
	CHANNEL_PINS,
	CHANNEL_RECIPIENT,
	CHANNEL_TYPING,
	GUILD,
	GUILD_AUDIT_LOGS,
	GUILD_BAN,
	GUILD_BANS,
	GUILD_CHANNELS,
	GUILD_CURRENT_USER_NICK,
	GUILD_EMBED,
	GUILD_EMOJI,
	GUILD_EMOJIS,
	GUILD_INTEGRATION,
	GUILD_INTEGRATION_SYNC,
	GUILD_INTEGRATIONS,
	GUILD_INVITES,
	GUILD_MEMBER,
	GUILD_MEMBER_ROLE,
	GUILD_MEMBERS,
	GUILD_PREVIEW,
	GUILD_PRUNE,
	GUILD_REGIONS,
	GUILD_ROLE,
	GUILD_ROLES,
	GUILD_VANITY_URL,
	GUILD_WIDGET,
	GUILD_WIDGET_IMAGE,
	GUILDS,
} from './endpoint-urls.ts';

export class DiscordEndpoints {
	private readonly api: ApiCaller;

	constructor(token: string) {
		this.api = new ApiCaller(token);
	}

	checkPermissions(...list: Permission[]) {
		// TODO
	}

	//
	// AUDIT LOG
	//

	// https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
	getGuildAuditLog(id: GuildId) {
		this.checkPermissions(Permission.VIEW_AUDIT_LOG);
		return this.api.get<RawAuditLog>(GUILD_AUDIT_LOGS(id)).then(wrapAuditLog);
	}

	//
	// CHANNEL
	//

	// https://discord.com/developers/docs/resources/channel#get-channel
	getChannel(id: ChannelId) {
		return this.api.get<RawChannel>(CHANNEL(id)).then(wrapChannel);
	}

	// https://discord.com/developers/docs/resources/channel#modify-channel
	modifyChannel(id: ChannelId, payload: ModifyChannelPayload) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		const raw = unwrapModifyChannelPayload(payload);
		return this.api.patch<void>(CHANNEL(id), raw);
	}

	// https://discord.com/developers/docs/resources/channel#deleteclose-channel
	deleteChannel(id: ChannelId) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		return this.api.delete<RawChannel>(CHANNEL(id)).then(wrapChannel);
	}

	// https://discord.com/developers/docs/resources/channel#get-channel-messages
	getChannelMessages(id: ChannelId, params?: ChannelMessagesParams) {
		this.checkPermissions(Permission.VIEW_CHANNEL);
		const raw = params && unwrapChannelMessagesParams(params);
		return this.api
			.delete<RawMessage[]>(CHANNEL_MESSAGES(id), raw)
			.then(x => x.map(wrapMessage));
	}

	// https://discord.com/developers/docs/resources/channel#get-channel-message
	getChannelMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.READ_MESSAGE_HISTORY);
		return this.api
			.get<RawMessage>(CHANNEL_MESSAGE(id, messageId))
			.then(wrapMessage);
	}

	// https://discord.com/developers/docs/resources/channel#create-message
	createMessage(id: ChannelId, payload: CreateMessagePayload) {
		this.checkPermissions(Permission.SEND_MESSAGES);

		if (payload.tts) {
			this.checkPermissions(Permission.SEND_TTS_MESSAGES);
		}

		if (payload.file) {
			throw new Error('Not implemented');
		}

		if (!payload.content && !payload.embed && !payload.file) {
			throw new Error('Either "content", "embed" or "file" is required.');
		}

		const raw = unwrapCreateMessagePayload(payload);
		return this.api
			.post<RawMessage>(CHANNEL_MESSAGES(id), raw)
			.then(wrapMessage);
	}

	// https://discord.com/developers/docs/resources/channel#create-reaction
	createReaction(id: ChannelId, messageId: MessageId, emoji: string) {
		// if nobody else has reacted to the message using this emoji, this endpoint requires the 'ADD_REACTIONS
		this.checkPermissions(Permission.READ_MESSAGE_HISTORY);
		return this.api.put<void>(
			CHANNEL_MESSAGE_REACTION_USER(id, messageId, emoji, '@me'),
		);
	}

	// https://discord.com/developers/docs/resources/channel#delete-own-reaction
	deleteOwnReaction(id: ChannelId, messageId: MessageId, emoji: string) {
		return this.api.delete<void>(
			CHANNEL_MESSAGE_REACTION_USER(id, messageId, emoji, '@me'),
		);
	}

	// https://discord.com/developers/docs/resources/channel#delete-user-reaction
	deleteReaction(
		id: ChannelId,
		messageId: MessageId,
		emoji: string,
		userId: UserId,
	) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(
			CHANNEL_MESSAGE_REACTION_USER(id, messageId, emoji, userId),
		);
	}

	// https://discord.com/developers/docs/resources/channel#get-reactions
	getReactions(
		id: ChannelId,
		messageId: MessageId,
		emoji: string,
		params?: ReactionsParams,
	) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		const raw = params && unwrapReactionsParams(params);
		return this.api.get<RawUser[]>(
			CHANNEL_MESSAGE_REACTION(id, messageId, emoji),
			raw,
		);
	}

	// https://discord.com/developers/docs/resources/channel#delete-all-reactions
	deleteAllReactions(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(CHANNEL_MESSAGE_REACTIONS(id, messageId));
	}

	// https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji
	deleteAllReactionsForEmoji(
		id: ChannelId,
		messageId: MessageId,
		emoji: string,
	) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(
			CHANNEL_MESSAGE_REACTION(id, messageId, emoji),
		);
	}

	// https://discord.com/developers/docs/resources/channel#edit-message
	editMessage(
		id: ChannelId,
		messageId: MessageId,
		payload: EditMessagePayload,
	) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		const raw = unwrapEditMessagePayload(payload);
		return this.api.patch<RawMessage>(CHANNEL_MESSAGE(id, messageId), raw);
	}

	// https://discord.com/developers/docs/resources/channel#delete-message
	deleteMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(CHANNEL_MESSAGE(id, messageId));
	}

	// https://discord.com/developers/docs/resources/channel#bulk-delete-messages
	bulkDeleteMessages(id: ChannelId, payload?: BulkDeleteMessagesPayload) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		const raw = payload && unwrapBulkDeleteMessagesPayload(payload);
		return this.api.post<void>(CHANNEL_BULK_DELETE(id), raw);
	}

	// https://discord.com/developers/docs/resources/channel#edit-channel-permissions
	editChannelPermissions(
		id: ChannelId,
		overwriteId: OverwriteId,
		payload: EditChannelPermissionsPayload,
	) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		const raw = unwrapEditChannelPermissionsPayload(payload);
		return this.api.put<void>(CHANNEL_PERMISSIONS(id, overwriteId), raw);
	}

	// https://discord.com/developers/docs/resources/channel#get-channel-invites
	getChannelInvites(id: ChannelId) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		return this.api
			.get<RawInvite[]>(CHANNEL_INVITES(id))
			.then(x => x.map(wrapInvite));
	}

	// https://discord.com/developers/docs/resources/channel#create-channel-invite
	createChannelInvite(id: ChannelId, payload: CreateChannelInvitePayload = {}) {
		this.checkPermissions(Permission.CREATE_INSTANT_INVITE);
		const raw = unwrapCreateChannelInvitePayload(payload);
		return this.api.post(CHANNEL_INVITES(id), raw);
	}

	// https://discord.com/developers/docs/resources/channel#delete-channel-permission
	deleteChannelPermission(id: ChannelId, overwriteId: OverwriteId) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		return this.api.delete<void>(CHANNEL_PERMISSIONS(id, overwriteId));
	}

	// https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
	triggerTypingIndicator(id: ChannelId) {
		return this.api.post<void>(CHANNEL_TYPING(id));
	}

	// https://discord.com/developers/docs/resources/channel#get-pinned-messages
	getPinnedMessage(id: ChannelId) {
		return this.api
			.get<RawMessage[]>(CHANNEL_PINS(id))
			.then(x => x.map(wrapMessage));
	}

	// https://discord.com/developers/docs/resources/channel#add-pinned-channel-message
	addPinnedChannelMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.put<void>(CHANNEL_PINNED_MESSAGE(id, messageId));
	}

	// https://discord.com/developers/docs/resources/channel#delete-pinned-channel-message
	deletePinnedChannelMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(CHANNEL_PINNED_MESSAGE(id, messageId));
	}

	// https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
	groupDmAddRecipient(
		id: ChannelId,
		userId: UserId,
		payload: GroupDmAddRecipientPayload,
	) {
		const raw = unwrapGroupDmAddRecipientPayload(payload);
		return this.api.put<void>(CHANNEL_RECIPIENT(id, userId), raw);
	}

	// https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
	groupDmRemoveRecipient(id: ChannelId, userId: UserId) {
		return this.api.delete<void>(CHANNEL_RECIPIENT(id, userId));
	}

	//
	// EMOJI
	//

	// https://discord.com/developers/docs/resources/emoji#list-guild-emojis
	listGuildEmojis(id: GuildId) {
		return this.api
			.get<RawEmoji[]>(GUILD_EMOJIS(id))
			.then(x => x.map(wrapEmoji));
	}

	// https://discord.com/developers/docs/resources/emoji#get-guild-emoji
	getGuildEmoji(id: GuildId, emoji: EmojiId) {
		return this.api.get<RawEmoji>(GUILD_EMOJI(id, emoji)).then(wrapEmoji);
	}

	// https://discord.com/developers/docs/resources/emoji#create-guild-emoji
	createGuildEmoji(id: GuildId, payload: CreateGuildEmojiPayload) {
		this.checkPermissions(Permission.MANAGE_EMOJIS);
		const raw = unwrapCreateGuildEmojiPayload(payload);
		return this.api.post<RawEmoji>(GUILD_EMOJIS(id), raw);
	}

	// https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
	modifyGuildEmoji(
		id: GuildId,
		emoji: EmojiId,
		payload?: ModifyGuildEmojiPayload,
	) {
		this.checkPermissions(Permission.MANAGE_EMOJIS);
		const raw = payload && unwrapModifyGuildEmojiPayload(payload);
		return this.api.get<RawEmoji>(GUILD_EMOJI(id, emoji), raw).then(wrapEmoji);
	}

	// https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
	deleteGuildEmoji(id: GuildId, emoji: EmojiId) {
		this.checkPermissions(Permission.MANAGE_EMOJIS);
		this.api.delete<void>(GUILD_EMOJI(id, emoji));
	}

	//
	// GUILD
	//

	// https://discord.com/developers/docs/resources/guild#create-guild
	createGuild(payload: CreateGuildPayload) {
		const raw = unwrapCreateGuildPayload(payload);
		return this.api.post<RawGuild>(GUILDS(), raw).then(wrapGuild);
	}

	// https://discord.com/developers/docs/resources/guild#get-guild
	getGuild(id: GuildId, params?: GuildParams) {
		const raw = params && unwrapGuildParams(params);
		return this.api.get<RawGuild>(GUILD(id), raw).then(wrapGuild);
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-preview
	getGuildPreview(id: GuildId) {
		return this.api
			.get<RawGuildPreview>(GUILD_PREVIEW(id))
			.then(wrapGuildPreview);
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild
	modifyGuild(id: GuildId, payload?: ModifyGuildPayload) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		const raw = payload && unwrapModifyChannelPayload(payload);
		return this.api.patch<RawGuild>(GUILD(id), raw).then(wrapGuild);
	}

	// https://discord.com/developers/docs/resources/guild#delete-guild
	deleteGuild(id: GuildId) {
		return this.api.delete<void>(GUILD(id));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-channels
	getGuildChannels(id: GuildId) {
		return this.api
			.get<RawChannel[]>(GUILD_CHANNELS(id))
			.then(x => x.map(wrapChannel));
	}

	// https://discord.com/developers/docs/resources/guild#create-guild-channel
	createGuildChannel(id: GuildId, payload: CreateGuildChannelPayload) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		const raw = unwrapCreateGuildChannelPayload(payload);
		return this.api.post<RawChannel>(GUILD_CHANNELS(id), raw);
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
	modifyGuildChannelPosition(
		id: GuildId,
		payload: ModifyGuildChannelPositionsPayload,
	) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		const raw = unwrapModifyGuildChannelPositionsPayload(payload);
		return this.api.patch<void>(GUILD_CHANNELS(id), raw);
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-member
	getGuildMember(id: GuildId, userId: UserId) {
		return this.api
			.get<RawGuildMember>(GUILD_MEMBER(id, userId))
			.then(wrapGuildMember);
	}

	// https://discord.com/developers/docs/resources/guild#list-guild-member
	listGuildMembers(id: GuildId, params?: GuildMembersParams) {
		return this.api
			.get<RawGuildMember>(GUILD_MEMBERS(id), params)
			.then(wrapGuildMember);
	}

	// https://discord.com/developers/docs/resources/guild#add-guild-member
	addGuildMember(id: GuildId, userId: UserId, payload: AddGuildMemberPayload) {
		this.checkPermissions(Permission.CREATE_INSTANT_INVITE);
		const raw = unwrapAddGuildMemberPayload(payload);
		return this.api
			.put<RawGuildMember | null>(GUILD_MEMBER(id, userId), raw)
			.then(x => x && wrapGuildMember(x));
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild-member
	modifyGuildMember(
		id: GuildId,
		userId: UserId,
		payload?: ModifyGuildMemberPayload,
	) {
		const raw = payload && unwrapModifyGuildMemberPayload(payload);
		return this.api.patch<void>(GUILD_MEMBER(id, userId), raw);
	}

	// https://discord.com/developers/docs/resources/guild#modify-current-user-nick
	modifyCurrentUserNick(id: GuildId, payload?: ModifyCurrentUserPayload) {
		const raw = payload && unwrapModifyCurrentUserPayload(payload);
		return this.api.patch<string>(GUILD_CURRENT_USER_NICK(id), raw);
	}

	// https://discord.com/developers/docs/resources/guild#add-guild-member-role
	addGuildMemberRole(id: GuildId, userId: UserId, roleId: RoleId) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		return this.api.put<void>(GUILD_MEMBER_ROLE(id, userId, roleId));
	}

	// https://discord.com/developers/docs/resources/guild#remove-guild-member-role
	removeGuildMemberRole(id: GuildId, userId: UserId, roleId: RoleId) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		return this.api.delete<void>(GUILD_MEMBER_ROLE(id, userId, roleId));
	}

	// https://discord.com/developers/docs/resources/guild#remove-guild-member
	removeGuildMember(id: GuildId, userId: UserId) {
		this.checkPermissions(Permission.KICK_MEMBERS);
		return this.api.delete<void>(GUILD_MEMBER(id, userId));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-bans
	getGuildBans(id: GuildId) {
		this.checkPermissions(Permission.BAN_MEMBERS);
		return this.api.get<RawBan[]>(GUILD_BANS(id)).then(x => x.map(wrapBan));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-ban
	getGuildBan(id: GuildId, userId: UserId) {
		this.checkPermissions(Permission.BAN_MEMBERS);
		return this.api.get<RawBan>(GUILD_BAN(id, userId)).then(wrapBan);
	}

	// https://discord.com/developers/docs/resources/guild#create-guild-ban
	createGuildBan(id: GuildId, userId: UserId, payload?: CreateGuildBanParams) {
		this.checkPermissions(Permission.BAN_MEMBERS);
		const raw = payload && unwrapCreateGuildBanParams(payload);
		return this.api.put<void>(GUILD_BAN(id, userId), null, raw);
	}

	// https://discord.com/developers/docs/resources/guild#remove-guild-ban
	removeGuildBan(id: GuildId, userId: UserId) {
		this.checkPermissions(Permission.BAN_MEMBERS);
		return this.api.delete<void>(GUILD_BAN(id, userId));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-roles
	getGuildRoles(id: GuildId) {
		return this.api.get<RawRole[]>(GUILD_ROLES(id)).then(x => x.map(wrapRole));
	}

	// https://discord.com/developers/docs/resources/guild#create-guild-role
	createGuildRole(id: GuildId, payload?: CreateGuildRolePayload) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		const raw = payload && unwrapCreateGuildRolePayload(payload);
		return this.api.post<RawRole>(GUILD_ROLES(id), raw);
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
	modifyGuildRolePositions(
		id: GuildId,
		payload: ModifyGuildRolePositionsPayload,
	) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		const raw = payload && unwrapModifyGuildRolePositionsPayload(payload);
		return this.api
			.patch<RawRole[]>(GUILD_ROLES(id), raw)
			.then(x => x.map(wrapRole));
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild-role
	modifyGuildRole(
		id: GuildId,
		roleId: RoleId,
		payload?: ModifyGuildRolePayload,
	) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		const raw = payload && unwrapModifyGuildRolePayload(payload);
		return this.api.patch<RawRole>(GUILD_ROLE(id, roleId), raw).then(wrapRole);
	}

	// https://discord.com/developers/docs/resources/guild#delete-guild-role
	deleteGuildRole(id: GuildId, roleId: RoleId) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		return this.api.delete<void>(GUILD_ROLE(id, roleId));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-prune-count
	getGuildProneCount(id: GuildId, params?: GuildPruneCountParams) {
		this.checkPermissions(Permission.KICK_MEMBERS);
		const raw = params && unwrapGuildPruneCountParams(params);
		return this.api.get<{ pruned: number }>(GUILD_PRUNE(id), params);
	}

	// https://discord.com/developers/docs/resources/guild#begin-guild-prune
	beginGuildProne(id: GuildId, params?: BeginGuildPruneParams) {
		this.checkPermissions(Permission.KICK_MEMBERS);
		const raw = params && unwrapBeginGuildPruneParams(params);
		return this.api.get<{ pruned: number }>(GUILD_PRUNE(id), raw);
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
	getGuildVoiceRegions(id: GuildId) {
		return this.api
			.get<RawVoiceRegion[]>(GUILD_REGIONS(id))
			.then(x => x.map(wrapVoiceRegion));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-invites
	getGuildInvites(id: GuildId) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		return this.api
			.get<RawInvite[]>(GUILD_INVITES(id))
			.then(x => x.map(wrapInvite));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-integrations
	getGuildIntegrations(id: GuildId) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		return this.api
			.get<RawIntegration[]>(GUILD_INTEGRATIONS(id))
			.then(x => x.map(wrapIntegration));
	}

	// https://discord.com/developers/docs/resources/guild#create-guild-integration
	createGuildIntegration(id: GuildId, payload: CreateGuildIntegrationPayload) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		const raw = unwrapCreateGuildIntegrationPayload(payload);
		return this.api.post<void>(GUILD_INTEGRATIONS(id));
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild-integration
	modifyGuildIntegration(
		id: GuildId,
		integrationId: IntegrationId,
		payload: ModifyGuildIntegrationPayload,
	) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		const raw = unwrapModifyGuildIntegrationPayload(payload);
		return this.api.patch(GUILD_INTEGRATION(id, integrationId), raw);
	}

	// https://discord.com/developers/docs/resources/guild#delete-guild-integration
	deleteGuildIntegration(id: GuildId, integrationId: IntegrationId) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		return this.api.delete<void>(GUILD_INTEGRATION(id, integrationId));
	}

	// https://discord.com/developers/docs/resources/guild#sync-guild-integration
	syncGuildIntegration(id: GuildId, integrationId: IntegrationId) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		return this.api.post<void>(GUILD_INTEGRATION_SYNC(id, integrationId));
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-widget
	getGuildWidget(id: GuildId) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		return this.api.get<RawGuildWidget>(GUILD_WIDGET(id)).then(wrapGuildWidget);
	}

	// https://discord.com/developers/docs/resources/guild#modify-guild-widget
	modifyGuildWidget(id: GuildId, payload: Partial<GuildWidget>) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		const raw = unwrapGuildWidgetPartial(payload);
		return this.api.patch<RawGuildWidget>(GUILD(id), raw).then(wrapGuildWidget);
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
	getGuildVanityUrl(id: GuildId) {
		this.checkPermissions(Permission.MANAGE_GUILD);
		return this.api
			.get<Partial<RawInvite>>(GUILD_VANITY_URL(id))
			.then(wrapInvitePartial);
	}

	// https://discord.com/developers/docs/resources/guild#get-guild-widget-image
	getGuildWidgeteImageUrl(id: GuildId, params?: GuildWidgetImageParams) {
		const raw = unwrapGuildWidgetImageParams(params);
		const url = GUILD_WIDGET_IMAGE(id);
		return this.api.addQueryParams(url, raw);
	}

	// gatewayBot() {
	// 	return this.api.get(GATEWAY_BOT()).then(wrapBotGatewayData);
	// }
}
