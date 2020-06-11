import { SerializedDate } from '../../type-aliases.ts';
import { EmbedAuthorRaw } from './EmbedAuthorRaw.ts';
import { EmbedFieldRaw } from './EmbedFieldRaw.ts';
import { EmbedFooterRaw } from './EmbedFooterRaw.ts';
import { EmbedImageRaw } from './EmbedImageRaw.ts';
import { EmbedProviderRaw } from './EmbedProviderRaw.ts';
import { EmbedThumbnailRaw } from './EmbedThumbnailRaw.ts';
import { EmbedVideoRaw } from './EmbedVideoRaw.ts';

export interface EmbedRaw {
	/** title of embed */
	title?: string;
	/** type of embed (always "rich" for webhook embeds) */
	type?: string;
	/** description of embed */
	description?: string;
	/** url of embed */
	url?: string;
	/** timestamp of embed content (ISO8601 timestamp) */
	timestamp?: SerializedDate;
	/** color code of the embed */
	color?: number;
	/** footer information */
	footer?: EmbedFooterRaw;
	/** image information */
	image?: EmbedImageRaw;
	/** thumbnail information */
	thumbnail?: EmbedThumbnailRaw;
	/** video information */
	video?: EmbedVideoRaw;
	/** provider information */
	provider?: EmbedProviderRaw;
	/** author information */
	author?: EmbedAuthorRaw;
	/** fields information */
	fields?: EmbedFieldRaw[];
}
