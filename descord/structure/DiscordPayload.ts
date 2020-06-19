import { wrapHeartbeatPayload, HeartbeatPayload } from './HeartbeatPayload.ts';
import { RawDiscordPayload } from '../raw/composed/RawDiscordPayload.ts';

import { integer } from '../type-aliases.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { ReadyEvent, wrapReadyEvent } from './ReadyEvent.ts';
import { GuildCreateEvent, wrapGuildCreateEvent } from './GuildCreateEvent.ts';

interface DiscordPayload_Dispatch_HELLO {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.HELLO;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_READY {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.READY;
	d: ReadyEvent;
	s: integer;
}

interface DiscordPayload_Dispatch_RESUMED {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RESUMED;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_RECONNECT {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RECONNECT;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_INVALID_SESSION {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVALID_SESSION;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_CHANNEL_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_CREATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_CHANNEL_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_CHANNEL_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_DELETE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_CHANNEL_PINS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_PINS_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_CREATE;
	d: GuildCreateEvent;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_DELETE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_BAN_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_ADD;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_BAN_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_REMOVE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_EMOJIS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_EMOJIS_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_INTEGRATIONS_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_MEMBER_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_ADD;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_MEMBER_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_REMOVE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_MEMBER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_MEMBERS_CHUNK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBERS_CHUNK;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_ROLE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_CREATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_ROLE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_GUILD_ROLE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_DELETE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_INVITE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_CREATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_INVITE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_DELETE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_CREATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_DELETE_BULK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE_BULK;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_REACTION_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_ADD;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_ALL;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_PRESENCE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.PRESENCE_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_TYPING_START {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.TYPING_START;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_USER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.USER_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_VOICE_STATE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_STATE_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_VOICE_SERVER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_SERVER_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Dispatch_WEBHOOKS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.WEBHOOKS_UPDATE;
	d: null;
	s: integer;
}

interface DiscordPayload_Heartbeat {
	op: GatewayOpCode.Heartbeat;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_Identify {
	op: GatewayOpCode.Identify;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_PresenceUpdate {
	op: GatewayOpCode.PresenceUpdate;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_VoiceStateUpdate {
	op: GatewayOpCode.VoiceStateUpdate;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_Resume {
	op: GatewayOpCode.Resume;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_Reconnect {
	op: GatewayOpCode.Reconnect;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_RequestGuildMembers {
	op: GatewayOpCode.RequestGuildMembers;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_InvalidSession {
	op: GatewayOpCode.InvalidSession;
	t: null;
	d: null;
	s: null;
}

interface DiscordPayload_Hello {
	op: GatewayOpCode.Hello;
	t: null;
	d: HeartbeatPayload;
	s: null;
}

interface DiscordPayload_HeartbeatAck {
	op: GatewayOpCode.HeartbeatAck;
	t: null;
	d: null;
	s: null;
}

export type DiscordPayload =
	| DiscordPayload_Dispatch_HELLO
	| DiscordPayload_Dispatch_READY
	| DiscordPayload_Dispatch_RESUMED
	| DiscordPayload_Dispatch_RECONNECT
	| DiscordPayload_Dispatch_INVALID_SESSION
	| DiscordPayload_Dispatch_CHANNEL_CREATE
	| DiscordPayload_Dispatch_CHANNEL_UPDATE
	| DiscordPayload_Dispatch_CHANNEL_DELETE
	| DiscordPayload_Dispatch_CHANNEL_PINS_UPDATE
	| DiscordPayload_Dispatch_GUILD_CREATE
	| DiscordPayload_Dispatch_GUILD_UPDATE
	| DiscordPayload_Dispatch_GUILD_DELETE
	| DiscordPayload_Dispatch_GUILD_BAN_ADD
	| DiscordPayload_Dispatch_GUILD_BAN_REMOVE
	| DiscordPayload_Dispatch_GUILD_EMOJIS_UPDATE
	| DiscordPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE
	| DiscordPayload_Dispatch_GUILD_MEMBER_ADD
	| DiscordPayload_Dispatch_GUILD_MEMBER_REMOVE
	| DiscordPayload_Dispatch_GUILD_MEMBER_UPDATE
	| DiscordPayload_Dispatch_GUILD_MEMBERS_CHUNK
	| DiscordPayload_Dispatch_GUILD_ROLE_CREATE
	| DiscordPayload_Dispatch_GUILD_ROLE_UPDATE
	| DiscordPayload_Dispatch_GUILD_ROLE_DELETE
	| DiscordPayload_Dispatch_INVITE_CREATE
	| DiscordPayload_Dispatch_INVITE_DELETE
	| DiscordPayload_Dispatch_MESSAGE_CREATE
	| DiscordPayload_Dispatch_MESSAGE_UPDATE
	| DiscordPayload_Dispatch_MESSAGE_DELETE
	| DiscordPayload_Dispatch_MESSAGE_DELETE_BULK
	| DiscordPayload_Dispatch_MESSAGE_REACTION_ADD
	| DiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE
	| DiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL
	| DiscordPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI
	| DiscordPayload_Dispatch_PRESENCE_UPDATE
	| DiscordPayload_Dispatch_TYPING_START
	| DiscordPayload_Dispatch_USER_UPDATE
	| DiscordPayload_Dispatch_VOICE_STATE_UPDATE
	| DiscordPayload_Dispatch_VOICE_SERVER_UPDATE
	| DiscordPayload_Dispatch_WEBHOOKS_UPDATE
	| DiscordPayload_Heartbeat
	| DiscordPayload_Identify
	| DiscordPayload_PresenceUpdate
	| DiscordPayload_VoiceStateUpdate
	| DiscordPayload_Resume
	| DiscordPayload_Reconnect
	| DiscordPayload_RequestGuildMembers
	| DiscordPayload_InvalidSession
	| DiscordPayload_Hello
	| DiscordPayload_HeartbeatAck;

export function wrapDiscordPayload(x: RawDiscordPayload): DiscordPayload {
	switch (x.op) {
		case GatewayOpCode.Dispatch:
			switch (x.t) {
				case DiscordEvent.HELLO:
					return x;
				case DiscordEvent.READY:
					return { ...x, d: wrapReadyEvent(x.d) };
				case DiscordEvent.RESUMED:
					return x;
				case DiscordEvent.RECONNECT:
					return x;
				case DiscordEvent.INVALID_SESSION:
					return x;
				case DiscordEvent.CHANNEL_CREATE:
					return x;
				case DiscordEvent.CHANNEL_UPDATE:
					return x;
				case DiscordEvent.CHANNEL_DELETE:
					return x;
				case DiscordEvent.CHANNEL_PINS_UPDATE:
					return x;
				case DiscordEvent.GUILD_CREATE:
					return { ...x, d: wrapGuildCreateEvent(x.d) };
				case DiscordEvent.GUILD_UPDATE:
					return x;
				case DiscordEvent.GUILD_DELETE:
					return x;
				case DiscordEvent.GUILD_BAN_ADD:
					return x;
				case DiscordEvent.GUILD_BAN_REMOVE:
					return x;
				case DiscordEvent.GUILD_EMOJIS_UPDATE:
					return x;
				case DiscordEvent.GUILD_INTEGRATIONS_UPDATE:
					return x;
				case DiscordEvent.GUILD_MEMBER_ADD:
					return x;
				case DiscordEvent.GUILD_MEMBER_REMOVE:
					return x;
				case DiscordEvent.GUILD_MEMBER_UPDATE:
					return x;
				case DiscordEvent.GUILD_MEMBERS_CHUNK:
					return x;
				case DiscordEvent.GUILD_ROLE_CREATE:
					return x;
				case DiscordEvent.GUILD_ROLE_UPDATE:
					return x;
				case DiscordEvent.GUILD_ROLE_DELETE:
					return x;
				case DiscordEvent.INVITE_CREATE:
					return x;
				case DiscordEvent.INVITE_DELETE:
					return x;
				case DiscordEvent.MESSAGE_CREATE:
					return x;
				case DiscordEvent.MESSAGE_UPDATE:
					return x;
				case DiscordEvent.MESSAGE_DELETE:
					return x;
				case DiscordEvent.MESSAGE_DELETE_BULK:
					return x;
				case DiscordEvent.MESSAGE_REACTION_ADD:
					return x;
				case DiscordEvent.MESSAGE_REACTION_REMOVE:
					return x;
				case DiscordEvent.MESSAGE_REACTION_REMOVE_ALL:
					return x;
				case DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI:
					return x;
				case DiscordEvent.PRESENCE_UPDATE:
					return x;
				case DiscordEvent.TYPING_START:
					return x;
				case DiscordEvent.USER_UPDATE:
					return x;
				case DiscordEvent.VOICE_STATE_UPDATE:
					return x;
				case DiscordEvent.VOICE_SERVER_UPDATE:
					return x;
				case DiscordEvent.WEBHOOKS_UPDATE:
					return x;
			}
		case GatewayOpCode.Heartbeat:
			return x;
		case GatewayOpCode.Identify:
			return x;
		case GatewayOpCode.PresenceUpdate:
			return x;
		case GatewayOpCode.VoiceStateUpdate:
			return x;
		case GatewayOpCode.Resume:
			return x;
		case GatewayOpCode.Reconnect:
			return x;
		case GatewayOpCode.RequestGuildMembers:
			return x;
		case GatewayOpCode.InvalidSession:
			return x;
		case GatewayOpCode.Hello:
			return { ...x, d: wrapHeartbeatPayload(x.d) };
		case GatewayOpCode.HeartbeatAck:
			return x;
	}

	throw new Error(`Unknown payload ${JSON.stringify(x)}`);
}
