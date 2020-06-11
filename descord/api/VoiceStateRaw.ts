import { GuildId, ChannelId, UserId } from '../type-aliases.ts';
import { GuildMemberRaw } from './GuildMemberRaw.ts';

export interface VoiceStateRaw {
	/** the guild id this voice state is for */
	guild_id?: GuildId;
	/** the channel id this user is connected to */
	channel_id: ChannelId;
	/** the user id this voice state is for */
	user_id: UserId;
	/** the guild member this voice state is for */
	member?: GuildMemberRaw;
	/** the session id for this voice state */
	session_id: string;
	/** whether this user is deafened by the server */
	deaf: boolean;
	/** whether this user is muted by the server */
	mute: boolean;
	/** whether this user is locally deafened */
	self_deaf: boolean;
	/** whether this user is locally muted */
	self_mute: boolean;
	/** whether this user is streaming using "Go Live" */
	self_stream?: boolean;
	/** whether this user is muted by the current user */
	suppress: boolean;
}