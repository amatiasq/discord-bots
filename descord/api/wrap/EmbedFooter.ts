import { omit } from '../../util/omit.ts';
import { EmbedFooterRaw } from '../raw/EmbedFooterRaw.ts';

export type EmbedFooter = ReturnType<typeof wrapEmbedFooter>;

export function wrapEmbedFooter(x: EmbedFooterRaw) {
	return {
		...omit(x, 'icon_url', 'proxy_icon_url'),

		// Casing
		iconUrl: x.icon_url,
		proxyIconUrl: x.proxy_icon_url,
	};
}

export function unwrapEmbedFooter(x: EmbedFooter): EmbedFooterRaw {
	return {
		...omit(x, 'iconUrl', 'proxyIconUrl'),

		// Casing
		icon_url: x.proxyIconUrl,
		proxy_icon_url: x.proxyIconUrl,
	};
}
