import { omit } from '../../util/omit.ts';
import { EmbedAuthorRaw } from '../raw/EmbedAuthorRaw.ts';

export type EmbedAuthor = ReturnType<typeof wrapEmbedAuthor>;

export function wrapEmbedAuthor(json: EmbedAuthorRaw) {
	return {
		...omit(json, 'icon_url', 'proxy_icon_url'),

		// Casing
		iconUrl: json.icon_url,
		proxyIconUrl: json.proxy_icon_url,
	};
}
