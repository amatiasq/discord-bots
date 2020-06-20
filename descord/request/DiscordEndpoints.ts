import {
	BulkDeleteMessagesPayload,
	unwrapBulkDeleteMessagesPayload,
} from '../structure/BulkDeleteMessagesPayload.ts';
import {
	EditMessagePayload,
	unwrapEditMessagePayload,
} from '../structure/EditMessagePayload.ts';
import {
	ReactionsParams,
	unwrapReactionsParams,
} from '../structure/ReactionsParams.ts';
import {
	CreateMessagePayload,
	unwrapCreateMessagePayload,
} from '../structure/CreateMessagePayload.ts';
import { RawMessage } from '../raw/RawMessage.ts';
import { wrapMessage, Message } from '../structure/Message.ts';
import { RawAuditLog } from '../raw/RawAuditLog.ts';
import { RawChannel } from '../raw/RawChannel.ts';
import { wrapAuditLog } from '../structure/AuditLog.ts';
import { wrapBotGatewayData } from '../structure/BotGatewayData.ts';
import { wrapChannel, unwrapChannel, Channel } from '../structure/Channel.ts';
import {
	ModifyChannelPayload,
	unwrapModifyChannelPayload,
} from '../structure/ModifyChannelPayload.ts';
import {
	ChannelId,
	GuildId,
	Permission,
	MessageId,
	UserId,
} from '../type-aliases.ts';
import { ApiCaller } from './ApiCaller.ts';
import {
	CHANNEL,
	GATEWAY_BOT,
	GUILD_AUDIT_LOGS,
	CHANNEL_MESSAGES,
	CHANNEL_MESSAGE,
	CHANNEL_MESSAGE_REACTION_USER,
	CHANNEL_MESSAGE_REACTION,
	CHANNEL_MESSAGE_REACTIONS,
	CHANNEL_BULK_DELETE,
} from './endpoint-urls.ts';
import {
	ChannelMessagesParams,
	unwrapChannelMessagesParams,
} from '../structure/ChannelMessagesParams.ts';
import { RawUser } from '../raw/RawUser.ts';

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

	getChannelMessages(
		id: ChannelId,
		params: ChannelMessagesParams | null = null,
	) {
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
		params: ReactionsParams | null = null,
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

	bulkDeleteMessages(
		id: ChannelId,
		payload: BulkDeleteMessagesPayload | null = null,
	) {
		this.checkPermissions(Permission.MANAGE_MESSAGES);
		const raw = payload && unwrapBulkDeleteMessagesPayload(payload);
		return this.api.post<void>(CHANNEL_BULK_DELETE(id), raw);
	}

	//

	gatewayBot() {
		return this.api.get(GATEWAY_BOT()).then(wrapBotGatewayData);
	}

	// async sendMessage(channel: Channel, message: CreateMessagePayload) {
	// 	return this.api.post(CHANNEL_MESSAGES(channel.id), message);
	// }
}

type Id<T> = { id: T };
