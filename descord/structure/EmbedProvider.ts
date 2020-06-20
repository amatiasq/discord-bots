import { RawEmbedProvider } from '../raw/RawEmbedProvider.ts';


export interface EmbedProvider {
	/** name of provider */
	name?: string;
	/** url of provider */
	url?: string;
}


export function wrapEmbedProvider(x: RawEmbedProvider): EmbedProvider {
	return x;
};

export function unwrapEmbedProvider(x: EmbedProvider): RawEmbedProvider {
	return x;
};

export function wrapEmbedProviderPartial(x: Partial<RawEmbedProvider>): Partial<EmbedProvider> {
	return x;
};

export function unwrapEmbedProviderPartial(x: Partial<EmbedProvider>): Partial<RawEmbedProvider> {
	return x;
};

