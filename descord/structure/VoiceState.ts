import { RawVoiceState } from '../raw/RawVoiceState.ts';
import { GuildId, ChannelId, UserId } from '../type-aliases.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface VoiceState {
	/** the guild id this voice state is for */
	guildId?: GuildId;
	/** the channel id this user is connected to */
	channelId: ChannelId;
	/** the user id this voice state is for */
	userId: UserId;
	/** the guild member this voice state is for */
	member?: GuildMember;
	/** the session id for this voice state */
	sessionId: string;
	/** whether this user is deafened by the server */
	deaf: boolean;
	/** whether this user is muted by the server */
	mute: boolean;
	/** whether this user is locally deafened */
	selfDeaf: boolean;
	/** whether this user is locally muted */
	selfMute: boolean;
	/** whether this user is streaming using "Go Live" */
	selfStream?: boolean;
	/** whether this user is muted by the current user */
	suppress: boolean;
}


export function wrapVoiceState(x: RawVoiceState): VoiceState {
	return {
		...fromApiCasing(x),
		member: x.member && wrapGuildMember(x.member),
	};
};

export function unwrapVoiceState(x: VoiceState): RawVoiceState {
	return {
		...toApiCasing(x),
		member: x.member && unwrapGuildMember(x.member),
	};
};

export function wrapVoiceStatePartial(x: Partial<RawVoiceState>): Partial<VoiceState> {
	return {
		...fromApiCasing(x),
		member: x.member && wrapGuildMember(x.member),
	};
};

export function unwrapVoiceStatePartial(x: Partial<VoiceState>): Partial<RawVoiceState> {
	return {
		...toApiCasing(x),
		member: x.member && unwrapGuildMember(x.member),
	};
};

