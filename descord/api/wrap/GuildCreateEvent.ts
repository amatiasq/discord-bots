import { parseSerializedDate } from '../../type-aliases.ts';
import { GuildCreateEventRaw } from '../raw/GuildCreateEventRaw.ts';
import { wrapChannel } from './Channel.ts';
import { wrapGuild } from './Guild.ts';
import { wrapGuildMember } from './GuildMember.ts';
import { wrapPresenceUpdateEvent } from './PresenceUpdateEvent.ts';
import { wrapVoiceState } from './VoiceState.ts';

export type GuildCreateEvent = ReturnType<typeof wrapGuildCreateEvent>;

export function wrapGuildCreateEvent(json: GuildCreateEventRaw) {
	const {
		joined_at,
		large,
		unavailable,
		member_count,
		voice_states,
		members,
		channels,
		presences,
		...guild
	} = json;

	return {
		...wrapGuild(guild),

		// Casing
		// joinedAt: joined_at,
		memberCount: member_count,
		// voiceStates: voice_states,

		// Deserialization
		joinedAt: joined_at && parseSerializedDate(joined_at),
		voiceStates: voice_states?.map(wrapVoiceState),
		members: members?.map(wrapGuildMember),
		channels: channels?.map(wrapChannel),
		presences: presences?.map(wrapPresenceUpdateEvent),
	};
}
