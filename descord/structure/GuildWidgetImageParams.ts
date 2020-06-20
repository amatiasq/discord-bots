import { RawGuildWidgetImageParams } from '../raw/RawGuildWidgetImageParams.ts';


export interface GuildWidgetImageParams {
	/** style of the widget image returned (see below) DEFAULT: shield */
	style?: string;
}


export function wrapGuildWidgetImageParams(x: RawGuildWidgetImageParams): GuildWidgetImageParams {
	return x;
};

export function unwrapGuildWidgetImageParams(x: GuildWidgetImageParams): RawGuildWidgetImageParams {
	return x;
};

export function wrapGuildWidgetImageParamsPartial(x: Partial<RawGuildWidgetImageParams>): Partial<GuildWidgetImageParams> {
	return x;
};

export function unwrapGuildWidgetImageParamsPartial(x: Partial<GuildWidgetImageParams>): Partial<RawGuildWidgetImageParams> {
	return x;
};

