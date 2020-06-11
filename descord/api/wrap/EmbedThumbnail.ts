import { omit } from '../../util/omit.ts';
import { EmbedThumbnailRaw } from '../raw/EmbedThumbnailRaw.ts';

export type EmbedThumbnail = ReturnType<typeof wrapEmbedThumbnail>;

export function wrapEmbedThumbnail(x: EmbedThumbnailRaw) {
	return {
		...omit(x, 'proxy_url'),

		// Casing
		proxyUrl: x.proxy_url,
	};
}

export function unwrapEmbedThumbnail(x: EmbedThumbnail): EmbedThumbnailRaw {
	return {
		...omit(x, 'proxyUrl'),

		// Casing
		proxy_url: x.proxyUrl,
	};
}
