import { omit } from '../../util/omit.ts';
import { EmbedImageRaw } from '../raw/EmbedImageRaw.ts';

export type EmbedImage = ReturnType<typeof wrapEmbedImage>;

export function wrapEmbedImage(json: EmbedImageRaw) {
	return {
		...omit(json, 'proxy_url'),

		// Casing
		proxyUrl: json.proxy_url,
	};
}
