import { SerializedDate } from '../../type-aliases.ts';
import { RawEmbedAuthor } from './RawEmbedAuthor.ts';
import { RawEmbedField } from './RawEmbedField.ts';
import { RawEmbedFooter } from './RawEmbedFooter.ts';
import { RawEmbedImage } from './RawEmbedImage.ts';
import { RawEmbedProvider } from './RawEmbedProvider.ts';
import { RawEmbedThumbnail } from './RawEmbedThumbnail.ts';
import { RawEmbedVideo } from './RawEmbedVideo.ts';

export interface RawEmbed {
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
	footer?: RawEmbedFooter;
	/** image information */
	image?: RawEmbedImage;
	/** thumbnail information */
	thumbnail?: RawEmbedThumbnail;
	/** video information */
	video?: RawEmbedVideo;
	/** provider information */
	provider?: RawEmbedProvider;
	/** author information */
	author?: RawEmbedAuthor;
	/** fields information */
	fields?: RawEmbedField[];
}

