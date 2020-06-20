import { RawEmbedField } from '../raw/RawEmbedField.ts';


export interface EmbedField {
	/** name of the field */
	name: string;
	/** value of the field */
	value: string;
	/** whether or not this field should display inline */
	inline?: boolean;
}


export function wrapEmbedField(x: RawEmbedField): EmbedField {
	return x;
};

export function unwrapEmbedField(x: EmbedField): RawEmbedField {
	return x;
};

export function wrapEmbedFieldPartial(x: Partial<RawEmbedField>): Partial<EmbedField> {
	return x;
};

export function unwrapEmbedFieldPartial(x: Partial<EmbedField>): Partial<RawEmbedField> {
	return x;
};

