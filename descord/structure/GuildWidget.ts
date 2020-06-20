import { RawGuildWidget } from '../raw/RawGuildWidget.ts';
import { ChannelId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GuildWidget {
	/** whether the widget is enabled */
	enabled: boolean;
	/** the widget channel id */
	channelId?: ChannelId;
}


export function wrapGuildWidget(x: RawGuildWidget): GuildWidget {
	return fromApiCasing(x);
};

export function unwrapGuildWidget(x: GuildWidget): RawGuildWidget {
	return toApiCasing(x);
};

export function wrapGuildWidgetPartial(x: Partial<RawGuildWidget>): Partial<GuildWidget> {
	return fromApiCasing(x);
};

export function unwrapGuildWidgetPartial(x: Partial<GuildWidget>): Partial<RawGuildWidget> {
	return toApiCasing(x);
};

