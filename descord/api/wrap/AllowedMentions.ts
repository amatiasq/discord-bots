import { AllowedMentionsRaw } from '../raw/AllowedMentionsRaw.ts';

export type AllowedMentions = ReturnType<typeof wrapAllowedMentions>;

export function wrapAllowedMentions(json: AllowedMentionsRaw) {
	return json;
}
