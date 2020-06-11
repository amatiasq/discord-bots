import { omit } from '../../util/omit.ts';
import { EmbedFooterRaw } from '../raw/EmbedFooterRaw.ts';

export type EmbedFooter = ReturnType<typeof wrapEmbedFooter>;

export function wrapEmbedFooter(json: EmbedFooterRaw) {
	return {
		...omit(json, 'icon_url', 'proxy_icon_url'),

		// Casing
		iconUrl: json.icon_url,
		proxyIconUrl: json.proxy_icon_url,
	};
}
