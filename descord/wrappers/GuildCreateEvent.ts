import { GuildCreateEventRaw } from '../api/GuildCreateEventRaw.ts';
import { wrapGuild } from './Guild.ts';
import { parseSerializedDate } from '../type-aliases.ts';
import { wrapVoiceState } from './VoiceState.ts';
import { wrapGuildMember } from './GuildMember.ts';
import { wrapChannel } from './Channel.ts';
import { wrapPresenceUpdateEvent } from './PresenceUpdateEvent.ts';

export type IGuildCreateEvent = ReturnType<typeof wrapGuildCreateEvent>;

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
