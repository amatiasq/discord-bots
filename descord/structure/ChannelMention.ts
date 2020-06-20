import { RawChannelMention } from '../raw/RawChannelMention.ts';
import { ChannelId, GuildId } from '../type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ChannelMention {
	/** id of the channel */
	id: ChannelId;
	/** id of the guild containing the channel */
	guildId: GuildId;
	/** the type of channel */
	type: ChannelType;
	/** the name of the channel */
	name: string;
}


export function wrapChannelMention(x: RawChannelMention): ChannelMention {
	return fromApiCasing(x);
}

export function unwrapChannelMention(x: ChannelMention): RawChannelMention {
	return toApiCasing(x);
}

export const wrapChannelMentionPartial = wrapChannelMention as (x: Partial<RawChannelMention>) => Partial<ChannelMention>;

export const unwrapChannelMentionPartial = unwrapChannelMention as (x: Partial<ChannelMention>) => Partial<RawChannelMention>;


