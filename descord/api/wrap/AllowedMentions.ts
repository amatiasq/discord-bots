import { AllowedMentionsRaw } from '../raw/AllowedMentionsRaw.ts';

export type AllowedMentions = ReturnType<typeof wrapAllowedMentions>;

export function wrapAllowedMentions(x: AllowedMentionsRaw) {
	return x;
}

export function unwrapAllowedMentions(x: AllowedMentions): AllowedMentionsRaw {
	return x;
}
