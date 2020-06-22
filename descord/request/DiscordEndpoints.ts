import { RawGuildPreview } from '../raw/RawGuildPreview.ts';
import { GuildParams, unwrapGuildParams } from '../structure/GuildParams.ts';
import {
	CreateGuildPayload,
	unwrapCreateGuildPayload,
} from '../structure/CreateGuildPayload.ts';
import {
	ModifyGuildEmojiPayload,
	unwrapModifyGuildEmojiPayload,
} from '../structure/ModifyGuildEmojiPayload.ts';
import {
	CreateGuildEmojiPayload,
	unwrapCreateGuildEmojiPayload,
} from '../structure/CreateGuildEmojiPayload.ts';
import { RawAuditLog } from '../raw/RawAuditLog.ts';
import { RawChannel } from '../raw/RawChannel.ts';
import { RawInvite } from '../raw/RawInvite.ts';
import { RawMessage } from '../raw/RawMessage.ts';
import { RawUser } from '../raw/RawUser.ts';
import { wrapAuditLog } from '../structure/AuditLog.ts';
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
import {
	GroupDmAddRecipientPayload,
	unwrapGroupDmAddRecipientPayload,
} from '../structure/GroupDmAddRecipientPayload.ts';
import { wrapInvite } from '../structure/Invite.ts';
import { wrapMessage } from '../structure/Message.ts';
import {
	ModifyChannelPayload,
	unwrapModifyChannelPayload,
} from '../structure/ModifyChannelPayload.ts';
import {
	ReactionsParams,
	unwrapReactionsParams,
} from '../structure/ReactionsParams.ts';
import {
	ChannelId,
	GuildId,
	MessageId,
	OverwriteId,
	Permission,
	UserId,
	EmojiId,
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
	CHANNEL_TYPING,
	GUILD_AUDIT_LOGS,
	CHANNEL_RECIPIENT,
	GUILD_EMOJIS,
	GUILD_EMOJI,
	GUILDS,
	GUILD,
} from './endpoint-urls.ts';
import { RawEmoji } from '../raw/RawEmoji.ts';
import { wrapEmoji } from '../structure/Emoji.ts';
import { wrapGuild } from '../structure/Guild.ts';
import { RawGuild } from '../raw/RawGuild.ts';

export class DiscordEndpoints {
	private readonly api: ApiCaller;

	constructor(token: string) {
		this.api = new ApiCaller(token);
	}

	checkPermissions(...list: Permission[]) {
		// TODO
	}

	// https://discord.com/developers/docs/resources/audit-log

	getGuildAuditLog(id: GuildId) {
		this.checkPermissions(Permission.VIEW_AUDIT_LOG);
		return this.api.get<RawAuditLog>(GUILD_AUDIT_LOGS(id)).then(wrapAuditLog);
	}

	// https://discord.com/developers/docs/resources/channel

	getChannel(id: ChannelId) {
		return this.api.get<RawChannel>(CHANNEL(id)).then(wrapChannel);
	}

	modifyChannel(id: ChannelId, payload: ModifyChannelPayload) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		const raw = unwrapModifyChannelPayload(payload);
		return this.api.patch<void>(CHANNEL(id), raw);
	}

	deleteChannel(id: ChannelId) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		return this.api.delete<RawChannel>(CHANNEL(id)).then(wrapChannel);
	}

	getChannelMessages(id: ChannelId, params?: ChannelMessagesParams) {
		this.checkPermissions(Permission.VIEW_CHANNEL);
		const raw = params && unwrapChannelMessagesParams(params);
		return this.api
			.delete<RawMessage[]>(CHANNEL_MESSAGES(id), raw)
			.then(x => x.map(wrapMessage));
	}

	getChannelMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.READ_MESSAGE_HISTORY);
		return this.api
			.get<RawMessage>(CHANNEL_MESSAGE(id, messageId))
			.then(wrapMessage);
	}

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

	createReaction(id: ChannelId, messageId: MessageId, emoji: string) {
		// if nobody else has reacted to the message using this emoji, this endpoint requires the 'ADD_REACTIONS
		this.checkPermissions(Permission.READ_MESSAGE_HISTORY);
		return this.api.put<void>(
			CHANNEL_MESSAGE_REACTION_USER(id, messageId, emoji, '@me'),
		);
	}

	deleteOwnReaction(id: ChannelId, messageId: MessageId, emoji: string) {
		return this.api.delete<void>(
			CHANNEL_MESSAGE_REACTION_USER(id, messageId, emoji, '@me'),
		);
	}

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

	deleteAllReactions(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(CHANNEL_MESSAGE_REACTIONS(id, messageId));
	}

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

	editMessage(
		id: ChannelId,
		messageId: MessageId,
		payload: EditMessagePayload,
	) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		const raw = unwrapEditMessagePayload(payload);
		return this.api.patch<RawMessage>(CHANNEL_MESSAGE(id, messageId), raw);
	}

	deleteMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(CHANNEL_MESSAGE(id, messageId));
	}

	bulkDeleteMessages(id: ChannelId, payload?: BulkDeleteMessagesPayload) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		const raw = payload && unwrapBulkDeleteMessagesPayload(payload);
		return this.api.post<void>(CHANNEL_BULK_DELETE(id), raw);
	}

	editChannelPermissions(
		id: ChannelId,
		overwriteId: OverwriteId,
		payload: EditChannelPermissionsPayload,
	) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		const raw = unwrapEditChannelPermissionsPayload(payload);
		return this.api.put<void>(CHANNEL_PERMISSIONS(id, overwriteId), raw);
	}

	getChannelInvites(id: ChannelId) {
		this.checkPermissions(Permission.MANAGE_CHANNELS);
		return this.api
			.get<RawInvite[]>(CHANNEL_INVITES(id))
			.then(x => x.map(wrapInvite));
	}

	createChannelInvite(id: ChannelId, payload: CreateChannelInvitePayload = {}) {
		this.checkPermissions(Permission.CREATE_INSTANT_INVITE);
		const raw = unwrapCreateChannelInvitePayload(payload);
		return this.api.post(CHANNEL_INVITES(id), raw);
	}

	deleteChannelPermission(id: ChannelId, overwriteId: OverwriteId) {
		this.checkPermissions(Permission.MANAGE_ROLES);
		return this.api.delete<void>(CHANNEL_PERMISSIONS(id, overwriteId));
	}

	triggerTypingIndicator(id: ChannelId) {
		return this.api.post<void>(CHANNEL_TYPING(id));
	}

	getPinnedMessage(id: ChannelId) {
		return this.api
			.get<RawMessage[]>(CHANNEL_PINS(id))
			.then(x => x.map(wrapMessage));
	}

	addPinnedChannelMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.put<void>(CHANNEL_PINNED_MESSAGE(id, messageId));
	}

	deletePinnedChannelMessage(id: ChannelId, messageId: MessageId) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		return this.api.delete<void>(CHANNEL_PINNED_MESSAGE(id, messageId));
	}

	groupDmAddRecipient(
		id: ChannelId,
		userId: UserId,
		payload: GroupDmAddRecipientPayload,
	) {
		const raw = unwrapGroupDmAddRecipientPayload(payload);
		return this.api.put<void>(CHANNEL_RECIPIENT(id, userId), raw);
	}

	groupDmRemoveRecipient(id: ChannelId, userId: UserId) {
		return this.api.delete<void>(CHANNEL_RECIPIENT(id, userId));
	}

	// https://discord.com/developers/docs/resources/emoji

	listGuildEmojis(id: GuildId) {
		return this.api
			.get<RawEmoji[]>(GUILD_EMOJIS(id))
			.then(x => x.map(wrapEmoji));
	}

	getGuildEmoji(id: GuildId, emoji: EmojiId) {
		return this.api.get<RawEmoji>(GUILD_EMOJI(id, emoji)).then(wrapEmoji);
	}

	createGuildEmoji(id: GuildId, payload: CreateGuildEmojiPayload) {
		this.checkPermissions(Permission.MANAGE_EMOJIS);
		const raw = unwrapCreateGuildEmojiPayload(payload);
		return this.api.post<RawEmoji>(GUILD_EMOJIS(id), raw);
	}

	modifyGuildEmoji(
		id: GuildId,
		emoji: EmojiId,
		payload?: ModifyGuildEmojiPayload,
	) {
		this.checkPermissions(Permission.MANAGE_EMOJIS);
		const raw = payload && unwrapModifyGuildEmojiPayload(payload);
		return this.api.get<RawEmoji>(GUILD_EMOJI(id, emoji), raw).then(wrapEmoji);
	}

	deleteGuildEmoji(id: GuildId, emoji: EmojiId) {
		this.checkPermissions(Permission.MANAGE_EMOJIS);
		this.api.delete<void>(GUILD_EMOJI(id, emoji));
	}

	// https://discord.com/developers/docs/resources/guild

	createGuild(payload: CreateGuildPayload) {
		const raw = unwrapCreateGuildPayload(payload);
		return this.api.post<RawGuild>(GUILDS(), raw).then(wrapGuild);
	}

	getGuild(id: GuildId, params?: GuildParams) {
		const raw = params && unwrapGuildParams(params);
		return this.api.get<RawGuild>(GUILD(id), raw).then(wrapGuild);
	}

	getGuildPreview(id: GuildId) {
		// return this.api.get<RawGuildPreview>
	}

	// gatewayBot() {
	// 	return this.api.get(GATEWAY_BOT()).then(wrapBotGatewayData);
	// }
}
