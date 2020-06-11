import { EmbedProviderRaw } from '../raw/EmbedProviderRaw.ts';

export type EmbedProvider = ReturnType<typeof wrapEmbedProvider>;

export function wrapEmbedProvider(json: EmbedProviderRaw) {
	return json;
}
