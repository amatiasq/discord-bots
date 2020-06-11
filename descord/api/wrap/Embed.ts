import { parseSerializedDate } from '../../type-aliases.ts';
import { EmbedRaw } from '../raw/EmbedRaw.ts';
import { wrapEmbedAuthor } from './EmbedAuthor.ts';
import { wrapEmbedField } from './EmbedField.ts';
import { wrapEmbedFooter } from './EmbedFooter.ts';
import { wrapEmbedImage } from './EmbedImage.ts';
import { wrapEmbedProvider } from './EmbedProvider.ts';
import { wrapEmbedThumbnail } from './EmbedThumbnail.ts';
import { wrapEmbedVideo } from './EmbedVideo.ts';

export type IEmbed = ReturnType<typeof wrapEmbed>;

export function wrapEmbed(json: EmbedRaw) {
	return {
		...json,

		// Deserialization
		timestamp: json.timestamp && parseSerializedDate(json.timestamp),
		footer: json.footer && wrapEmbedFooter(json.footer),
		image: json.image && wrapEmbedImage(json.image),
		thumbnail: json.thumbnail && wrapEmbedThumbnail(json.thumbnail),
		video: json.video && wrapEmbedVideo(json.video),
		provider: json.provider && wrapEmbedProvider(json.provider),
		author: json.author && wrapEmbedAuthor(json.author),
		fields: json.fields?.map(wrapEmbedField),
	};
}
