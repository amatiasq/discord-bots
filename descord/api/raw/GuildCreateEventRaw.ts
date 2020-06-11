import { SerializedDate } from '../../type-aliases.ts';
import { ChannelRaw } from './ChannelRaw.ts';
import { GuildMemberRaw } from './GuildMemberRaw.ts';
import { GuildRaw } from './GuildRaw.ts';
import { PresenceUpdateEventRaw } from './PresenceUpdateEventRaw.ts';
import { VoiceStateRaw } from './VoiceStateRaw.ts';

export interface GuildCreateEventRaw extends GuildRaw {
	/** when this guild was joined at (ISO8601 timestamp) */
	joined_at?: SerializedDate;
	/** true if this is considered a large guild */
	large?: boolean;
	/** true if this guild is unavailable due to an outage */
	unavailable?: boolean;
	/** total number of members in this guild */
	member_count?: number;
	/** states of members currently in voice channels; lacks the guild_id key */
	voice_states?: VoiceStateRaw[];
	/** users in the guild */
	members?: GuildMemberRaw[];
	/** channels in the guild */
	channels?: ChannelRaw[];
	/** presences of the members in the guild, will only include non-offline members if the size is greater than large threshold */
	presences?: PresenceUpdateEventRaw[];
}
