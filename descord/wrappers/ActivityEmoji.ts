import { ActivityEmojiRaw } from '../api/ActivityEmojiRaw.ts';

export type ActivityEmoji = ReturnType<typeof wrapActivityEmoji>;

export function wrapActivityEmoji(json: ActivityEmojiRaw) {
	return json;
}
