import { omit } from '../../util/omit.ts';
import { EmbedImageRaw } from '../raw/EmbedImageRaw.ts';

export type EmbedImage = ReturnType<typeof wrapEmbedImage>;

export function wrapEmbedImage(x: EmbedImageRaw) {
	return {
		...omit(x, 'proxy_url'),

		// Casing
		proxyUrl: x.proxy_url,
	};
}

export function unwrapEmbedImage(x: EmbedImage): EmbedImageRaw {
	return {
		...omit(x, 'proxyUrl'),

		// Casing
		proxy_url: x.proxyUrl,
	};
}
