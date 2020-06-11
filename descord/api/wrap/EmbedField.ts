import { EmbedFieldRaw } from '../raw/EmbedFieldRaw.ts';

export type EmbedField = ReturnType<typeof wrapEmbedField>;

export function wrapEmbedField(json: EmbedFieldRaw) {
	return json;
}
