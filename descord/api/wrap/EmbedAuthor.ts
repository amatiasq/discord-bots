import { omit } from '../../util/omit.ts';
import { EmbedAuthorRaw } from '../raw/EmbedAuthorRaw.ts';

export type EmbedAuthor = ReturnType<typeof wrapEmbedAuthor>;

export function wrapEmbedAuthor(x: EmbedAuthorRaw) {
	return {
		...omit(x, 'icon_url', 'proxy_icon_url'),

		// Casing
		iconUrl: x.icon_url,
		proxyIconUrl: x.proxy_icon_url,
	};
}

export function unwrapEmbedAuthor(x: EmbedAuthor): EmbedAuthorRaw {
	return {
		...omit(x, 'iconUrl', 'proxyIconUrl'),

		// Casing
		icon_url: x.proxyIconUrl,
		proxy_icon_url: x.proxyIconUrl,
	};
}
