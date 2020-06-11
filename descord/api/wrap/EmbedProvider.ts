import { EmbedProviderRaw } from '../raw/EmbedProviderRaw.ts';

export type EmbedProvider = ReturnType<typeof wrapEmbedProvider>;

export function wrapEmbedProvider(x: EmbedProviderRaw) {
	return x;
}

export function unwrapEmbedProvider(x: EmbedProvider): EmbedProviderRaw {
	return x;
}
