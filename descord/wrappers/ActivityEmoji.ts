import { ActivityEmojiRaw } from '../api/ActivityEmojiRaw.ts';

export type IActivityEmoji = ReturnType<typeof wrapActivityEmoji>;

export function wrapActivityEmoji(json: ActivityEmojiRaw) {
	return json;
}
