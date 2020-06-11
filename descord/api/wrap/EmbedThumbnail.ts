import { omit } from '../../util/omit.ts';
import { EmbedThumbnailRaw } from '../raw/EmbedThumbnailRaw.ts';

export type EmbedThumbnail = ReturnType<typeof wrapEmbedThumbnail>;

export function wrapEmbedThumbnail(json: EmbedThumbnailRaw) {
	return {
		...omit(json, 'proxy_url'),

		// Casing
		proxyUrl: json.proxy_url,
	};
}
