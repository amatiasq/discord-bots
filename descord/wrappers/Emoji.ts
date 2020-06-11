import { omit } from '../util/omit.ts';
import { EmojiRaw } from '../api/EmojiRaw.ts';
import { wrapRole } from './Role.ts';
import { wrapUser } from './User.ts';

export type Emoji = ReturnType<typeof wrapEmoji>;

export function wrapEmoji(json: EmojiRaw) {
	return {
		...omit(json, 'require_colons'),

		// Casing
		requireColons: json.require_colons,

		// Deserialization
		roles: json.roles?.map(wrapRole),
		user: json.user && wrapUser(json.user),
	};
}
