import {
	parseSerializedDate,
	unparseSerializedDate,
} from '../../type-aliases.ts';
import { EmbedRaw } from '../raw/EmbedRaw.ts';
import { wrapEmbedAuthor, unwrapEmbedAuthor } from './EmbedAuthor.ts';
import { wrapEmbedField, unwrapEmbedField } from './EmbedField.ts';
import { wrapEmbedFooter, unwrapEmbedFooter } from './EmbedFooter.ts';
import { wrapEmbedImage, unwrapEmbedImage } from './EmbedImage.ts';
import { wrapEmbedProvider, unwrapEmbedProvider } from './EmbedProvider.ts';
import { wrapEmbedThumbnail, unwrapEmbedThumbnail } from './EmbedThumbnail.ts';
import { wrapEmbedVideo, unwrapEmbedVideo } from './EmbedVideo.ts';

export type Embed = ReturnType<typeof wrapEmbed>;

export function wrapEmbed(x: EmbedRaw) {
	return {
		...x,

		// Deserialization
		timestamp: x.timestamp && parseSerializedDate(x.timestamp),
		footer: x.footer && wrapEmbedFooter(x.footer),
		image: x.image && wrapEmbedImage(x.image),
		thumbnail: x.thumbnail && wrapEmbedThumbnail(x.thumbnail),
		video: x.video && wrapEmbedVideo(x.video),
		provider: x.provider && wrapEmbedProvider(x.provider),
		author: x.author && wrapEmbedAuthor(x.author),
		fields: x.fields?.map(wrapEmbedField),
	};
}

export function unwrapEmbed(x: Embed) {
	return {
		...x,

		// Deserialization
		timestamp: x.timestamp && unparseSerializedDate(x.timestamp),
		footer: x.footer && unwrapEmbedFooter(x.footer),
		image: x.image && unwrapEmbedImage(x.image),
		thumbnail: x.thumbnail && unwrapEmbedThumbnail(x.thumbnail),
		video: x.video && unwrapEmbedVideo(x.video),
		provider: x.provider && unwrapEmbedProvider(x.provider),
		author: x.author && unwrapEmbedAuthor(x.author),
		fields: x.fields?.map(unwrapEmbedField),
	};
}
