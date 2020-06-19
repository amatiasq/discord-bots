import { ChannelId } from '../type-aliases.ts';

export interface RawGuildWidget {
	/** whether the widget is enabled */
	enabled: boolean;
	/** the widget channel id */
	channel_id?: ChannelId;
}
