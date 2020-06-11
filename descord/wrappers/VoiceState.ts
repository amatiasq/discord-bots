import { omit } from '../util/omit.ts';
import { VoiceStateRaw } from '../api/VoiceStateRaw.ts';
import { wrapGuildMember } from './GuildMember.ts';

export type IVoiceState = ReturnType<typeof wrapVoiceState>;

export function wrapVoiceState(json: VoiceStateRaw) {
	return {
		...omit(
			json,
			'guild_id',
			'channel_id',
			'user_id',
			'session_id',
			'self_deaf',
			'self_mute',
			'self_stream',
		),

		// Casing
		guildId: json.guild_id,
		channelId: json.channel_id,
		userId: json.user_id,
		sessionId: json.session_id,
		selfDeaf: json.self_deaf,
		selfMute: json.self_mute,
		selfStream: json.self_stream,

		// Deserialization
		member: json.member && wrapGuildMember(json.member),
	};
}
