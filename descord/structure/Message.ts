import { RawMessage } from '../raw/RawMessage.ts';
import { MessageFlag } from '../enum/MessageFlag.ts';
import {
	ChannelId,
	GuildId,
	integer,
	parseISO8601Timestamp,
	unparseISO8601Timestamp,
	MessageId,
	RoleId,
	WebhookId,
} from '../type-aliases.ts';
import { Attachment, wrapAttachment, unwrapAttachment } from './Attachment.ts';
import {
	ChannelMention,
	wrapChannelMention,
	unwrapChannelMention,
} from './ChannelMention.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';
import {
	GuildMember,
	wrapGuildMember,
	unwrapGuildMember,
} from './GuildMember.ts';
import {
	MessageActivity,
	wrapMessageActivity,
	unwrapMessageActivity,
} from './MessageActivity.ts';
import {
	MessageApplication,
	wrapMessageApplication,
	unwrapMessageApplication,
} from './MessageApplication.ts';
import {
	MessageReference,
	wrapMessageReference,
	unwrapMessageReference,
} from './MessageReference.ts';
import { Reaction, wrapReaction, unwrapReaction } from './Reaction.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';
import { RawGuildMember } from '../raw/RawGuildMember.ts';

export interface Message {
	/** id of the message */
	id: MessageId;
	/** id of the channel the message was sent in */
	channelId: ChannelId;
	/** id of the guild the message was sent in */
	guildId?: GuildId;
	/**
	 * the author of this message (not guaranteed to be a valid user, see below)
	 *
	 * The author object follows the structure of the user object, but is only a
	 * valid user in the case where the message is generated by a user or bot user.
	 * If the message is generated by a webhook, the author object corresponds to
	 * the webhook's id, username, and avatar. You can tell if a message is
	 * generated by a webhook by checking for the webhookId on the message object.
	 */
	author: User; // webhook
	/**
	 * member properties for this message's author
	 *
	 * The member object exists in MESSAGECREATE and MESSAGEUPDATE events from
	 * text-based guild channels. This allows bots to obtain real-time member data
	 * without requiring bots to store member state in memory.
	 */
	member?: Partial<GuildMember>;
	/** contents of the message */
	content: string;
	/** when this message was sent */
	timestamp: Date;
	/** when this message was edited (or null if never) */
	editedTimestamp: Date;
	/** whether this was a TTS message */
	tts: boolean;
	/** whether this message mentions everyone */
	mentionEveryone: boolean;
	/**
	 * users specifically mentioned in the message
	 * array of user objects, with an additional partial member field
	 *
	 * The user objects in the mentions array will only have the partial member
	 * field present in MESSAGECREATE and MESSAGEUPDATE events from text-based
	 * guild channels.
	 */
	mentions: Array<User & { member: GuildMember }>;
	/** roles specifically mentioned in this message */
	mentionRoles: RoleId[];
	/**
	 * channels specifically mentioned in this message
	 *
	 * Not all channel mentions in a message will appear in mentionChannels. Only
	 * textual channels that are visible to everyone in a lurkable guild will ever
	 * be included. Only crossposted messages (via Channel Following) currently
	 * include mentionChannels at all. If no mentions in the message meet these
	 * requirements, this field will not be sent.
	 */
	mentionChannels?: ChannelMention[];
	/** any attached files */
	attachments: Attachment[];
	/** any embedded content */
	embeds: Embed[];
	/** reactions to the message */
	reactions?: Reaction[];
	/** used for validating a message was sent */
	nonce?: integer | string;
	/** whether this message is pinned */
	pinned: boolean;
	/** if the message is generated by a webhook, this is the webhook's id */
	webhookId?: WebhookId;
	/** type of message */
	type: integer;
	/** sent with Rich Presence-related chat embeds */
	activity?: MessageActivity;
	/** sent with Rich Presence-related chat embeds */
	application?: MessageApplication;
	/** reference data sent with crossposted messages */
	messageReference?: MessageReference;
	/** message flags ORd together, describes extra features of the message */
	flags?: MessageFlag;
}

export function wrapMessage(x: RawMessage): Message {
	return {
		...fromApiCasing(x),
		author: wrapUser(x.author), // webhook
		timestamp: parseISO8601Timestamp(x.timestamp),
		editedTimestamp: parseISO8601Timestamp(x.edited_timestamp),
		member: x.member && wrapGuildMember(x.member as RawGuildMember),
		mentions: x.mentions.map(y => ({
			...wrapUser(y),
			member: wrapGuildMember(y.member),
		})),
		mentionChannels:
			x.mention_channels && x.mention_channels.map(wrapChannelMention),
		attachments: x.attachments.map(wrapAttachment),
		embeds: x.embeds.map(wrapEmbed),
		reactions: x.reactions && x.reactions.map(wrapReaction),
		activity: x.activity && wrapMessageActivity(x.activity),
		application: x.application && wrapMessageApplication(x.application),
		messageReference:
			x.message_reference && wrapMessageReference(x.message_reference),
	};
}

export function unwrapMessage(x: Message): RawMessage {
	return {
		...toApiCasing(x),
		author: unwrapUser(x.author), // webhook
		timestamp: unparseISO8601Timestamp(x.timestamp),
		edited_timestamp: unparseISO8601Timestamp(x.editedTimestamp),
		member: x.member && unwrapGuildMember(x.member as GuildMember),
		mentions: x.mentions.map(y => ({
			...unwrapUser(y),
			member: unwrapGuildMember(y.member),
		})),
		mention_channels:
			x.mentionChannels && x.mentionChannels.map(unwrapChannelMention),
		attachments: x.attachments.map(unwrapAttachment),
		embeds: x.embeds.map(unwrapEmbed),
		reactions: x.reactions && x.reactions.map(unwrapReaction),
		activity: x.activity && unwrapMessageActivity(x.activity),
		application: x.application && unwrapMessageApplication(x.application),
		message_reference:
			x.messageReference && unwrapMessageReference(x.messageReference),
	};
}
