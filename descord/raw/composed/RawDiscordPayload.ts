import { DiscordEvent } from '../../enum/DiscordEvent.ts';
import { GatewayOpCode } from '../../enum/GatewayOpCode.ts';
import { RawGuildCreateEvent } from '../../raw/RawGuildCreateEvent.ts';
import { RawHeartbeatPayload } from '../../raw/RawHeartbeatPayload.ts';
import { RawReadyEvent } from '../../raw/RawReadyEvent.ts';
import { integer } from '../../type-aliases.ts';

interface RawDiscordPayload_Dispatch_HELLO {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.HELLO;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_READY {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.READY;
	d: RawReadyEvent;
	s: integer;
}

interface RawDiscordPayload_Dispatch_RESUMED {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RESUMED;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_RECONNECT {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RECONNECT;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_INVALID_SESSION {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVALID_SESSION;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_CHANNEL_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_CREATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_CHANNEL_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_CHANNEL_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_DELETE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_CHANNEL_PINS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_PINS_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_CREATE;
	d: RawGuildCreateEvent;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_DELETE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_BAN_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_ADD;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_BAN_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_REMOVE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_EMOJIS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_EMOJIS_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_INTEGRATIONS_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_MEMBER_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_ADD;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_MEMBER_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_REMOVE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_MEMBER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_MEMBERS_CHUNK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBERS_CHUNK;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_ROLE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_CREATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_ROLE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_GUILD_ROLE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_DELETE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_INVITE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_CREATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_INVITE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_DELETE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_CREATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_DELETE_BULK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE_BULK;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_REACTION_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_ADD;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_ALL;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_PRESENCE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.PRESENCE_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_TYPING_START {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.TYPING_START;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_USER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.USER_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_VOICE_STATE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_STATE_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_VOICE_SERVER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_SERVER_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Dispatch_WEBHOOKS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.WEBHOOKS_UPDATE;
	d: null;
	s: integer;
}

interface RawDiscordPayload_Heartbeat {
	op: GatewayOpCode.Heartbeat;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_Identify {
	op: GatewayOpCode.Identify;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_PresenceUpdate {
	op: GatewayOpCode.PresenceUpdate;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_VoiceStateUpdate {
	op: GatewayOpCode.VoiceStateUpdate;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_Resume {
	op: GatewayOpCode.Resume;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_Reconnect {
	op: GatewayOpCode.Reconnect;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_RequestGuildMembers {
	op: GatewayOpCode.RequestGuildMembers;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_InvalidSession {
	op: GatewayOpCode.InvalidSession;
	t: null;
	d: null;
	s: null;
}

interface RawDiscordPayload_Hello {
	op: GatewayOpCode.Hello;
	t: null;
	d: RawHeartbeatPayload;
	s: null;
}

interface RawDiscordPayload_HeartbeatAck {
	op: GatewayOpCode.HeartbeatAck;
	t: null;
	d: null;
	s: null;
}

export type RawDiscordPayload =
	| RawDiscordPayload_Dispatch_HELLO
	| RawDiscordPayload_Dispatch_READY
	| RawDiscordPayload_Dispatch_RESUMED
	| RawDiscordPayload_Dispatch_RECONNECT
	| RawDiscordPayload_Dispatch_INVALID_SESSION
	| RawDiscordPayload_Dispatch_CHANNEL_CREATE
	| RawDiscordPayload_Dispatch_CHANNEL_UPDATE
	| RawDiscordPayload_Dispatch_CHANNEL_DELETE
	| RawDiscordPayload_Dispatch_CHANNEL_PINS_UPDATE
	| RawDiscordPayload_Dispatch_GUILD_CREATE
	| RawDiscordPayload_Dispatch_GUILD_UPDATE
	| RawDiscordPayload_Dispatch_GUILD_DELETE
	| RawDiscordPayload_Dispatch_GUILD_BAN_ADD
	| RawDiscordPayload_Dispatch_GUILD_BAN_REMOVE
	| RawDiscordPayload_Dispatch_GUILD_EMOJIS_UPDATE
	| RawDiscordPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE
	| RawDiscordPayload_Dispatch_GUILD_MEMBER_ADD
	| RawDiscordPayload_Dispatch_GUILD_MEMBER_REMOVE
	| RawDiscordPayload_Dispatch_GUILD_MEMBER_UPDATE
	| RawDiscordPayload_Dispatch_GUILD_MEMBERS_CHUNK
	| RawDiscordPayload_Dispatch_GUILD_ROLE_CREATE
	| RawDiscordPayload_Dispatch_GUILD_ROLE_UPDATE
	| RawDiscordPayload_Dispatch_GUILD_ROLE_DELETE
	| RawDiscordPayload_Dispatch_INVITE_CREATE
	| RawDiscordPayload_Dispatch_INVITE_DELETE
	| RawDiscordPayload_Dispatch_MESSAGE_CREATE
	| RawDiscordPayload_Dispatch_MESSAGE_UPDATE
	| RawDiscordPayload_Dispatch_MESSAGE_DELETE
	| RawDiscordPayload_Dispatch_MESSAGE_DELETE_BULK
	| RawDiscordPayload_Dispatch_MESSAGE_REACTION_ADD
	| RawDiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE
	| RawDiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL
	| RawDiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI
	| RawDiscordPayload_Dispatch_PRESENCE_UPDATE
	| RawDiscordPayload_Dispatch_TYPING_START
	| RawDiscordPayload_Dispatch_USER_UPDATE
	| RawDiscordPayload_Dispatch_VOICE_STATE_UPDATE
	| RawDiscordPayload_Dispatch_VOICE_SERVER_UPDATE
	| RawDiscordPayload_Dispatch_WEBHOOKS_UPDATE
	| RawDiscordPayload_Heartbeat
	| RawDiscordPayload_Identify
	| RawDiscordPayload_PresenceUpdate
	| RawDiscordPayload_VoiceStateUpdate
	| RawDiscordPayload_Resume
	| RawDiscordPayload_Reconnect
	| RawDiscordPayload_RequestGuildMembers
	| RawDiscordPayload_InvalidSession
	| RawDiscordPayload_Hello
	| RawDiscordPayload_HeartbeatAck;
