import { RawGuildCreateEvent } from '../raw/RawGuildCreateEvent.ts';
import { parseSerializedDate, unparseSerializedDate } from '../type-aliases.ts';
import { Channel, wrapChannel, unwrapChannel } from './Channel.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';
import { Guild, wrapGuild, unwrapGuild } from './Guild.ts';
import { PresenceUpdateEvent, wrapPresenceUpdateEvent, unwrapPresenceUpdateEvent } from './PresenceUpdateEvent.ts';
import { VoiceState, wrapVoiceState, unwrapVoiceState } from './VoiceState.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GuildCreateEvent extends Guild {
	/** when this guild was joined at (ISO8601 timestamp) */
	joinedAt?: Date;
	/** true if this is considered a large guild */
	large?: boolean;
	/** true if this guild is unavailable due to an outage */
	unavailable?: boolean;
	/** total number of members in this guild */
	memberCount?: number;
	/** states of members currently in voice channels; lacks the guildId key */
	voiceStates?: VoiceState[];
	/** users in the guild */
	members?: GuildMember[];
	/** channels in the guild */
	channels?: Channel[];
	/** presences of the members in the guild, will only include non-offline members if the size is greater than large threshold */
	presences?: PresenceUpdateEvent[];
}


export function wrapGuildCreateEvent(x: RawGuildCreateEvent): GuildCreateEvent {
	return {
		...fromApiCasing(wrapRawGuild(x)),
		joinedAt: x.joined_at && parseSerializedDate(x.joined_at),
		voiceStates: x.voice_states && x.voice_states.map(wrapVoiceState),
		members: x.members && x.members.map(wrapGuildMember),
		channels: x.channels && x.channels.map(wrapChannel),
		presences: x.presences && x.presences.map(wrapPresenceUpdateEvent),
	};
};

export function unwrapGuildCreateEvent(x: GuildCreateEvent): RawGuildCreateEvent {
	return {
		...toApiCasing(unwrapRawGuild(x)),
		joined_at: x.joinedAt && unparseSerializedDate(x.joinedAt),
		voice_states: x.voiceStates && x.voiceStates.map(unwrapVoiceState),
		members: x.members && x.members.map(unwrapGuildMember),
		channels: x.channels && x.channels.map(unwrapChannel),
		presences: x.presences && x.presences.map(unwrapPresenceUpdateEvent),
	};
};

