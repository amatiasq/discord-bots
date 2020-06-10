import { SerializedDate } from '../type-aliases.ts';
import { ChannelStructure } from './ChannelStructure.ts';
import { GuildMemberStructure } from './GuildMemberStructure.ts';
import { GuildStructure } from './GuildStructure.ts';
import { PresenceUpdateEventStructure } from './PresenceUpdateEventStructure.ts';
import { VoiceStateStructure } from './VoiceStateStructure.ts';

export interface GuildCreateEventStructure extends GuildStructure {
	/** when this guild was joined at (ISO8601 timestamp) */
	joined_at?: SerializedDate;
	/** true if this is considered a large guild */
	large?: boolean;
	/** true if this guild is unavailable due to an outage */
	unavailable?: boolean;
	/** total number of members in this guild */
	member_count?: number;
	/** states of members currently in voice channels; lacks the guild_id key */
	voice_states?: VoiceStateStructure[];
	/** users in the guild */
	members?: GuildMemberStructure[];
	/** channels in the guild */
	channels?: ChannelStructure[];
	/** presences of the members in the guild, will only include non-offline members if the size is greater than large threshold */
	presences?: PresenceUpdateEventStructure[];
}
