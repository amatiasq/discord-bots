import { EmbedFieldRaw } from '../raw/EmbedFieldRaw.ts';

export type EmbedField = ReturnType<typeof wrapEmbedField>;

export function wrapEmbedField(x: EmbedFieldRaw) {
	return x;
}

export function unwrapEmbedField(x: EmbedField): EmbedFieldRaw {
	return x;
}
