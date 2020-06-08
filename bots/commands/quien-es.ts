import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';
import { Applied } from '../../src/mixin.ts';
import { DatabaseMixin, UserSchema } from '../../src/mixins/DatabaseMixin.ts';
import { randomItem } from '../../src/util/array.ts';
import { normalize, splitWords, trim } from '../../src/util/string.ts';

interface WhoUserSchema extends UserSchema {
	who: string;
}

const FALLBACKS = [
	'Quién?',
	'Ni puta idea',
	'Y yo que se',
	'A mi que me preguntas',
	'Tengo cara de ser tu asistente?',
];

export default async function (
	bot: Applied<typeof Bot, DatabaseMixin>,
	message: ExtendedMessage,
	text: string,
) {
	const target = splitWords(trim(normalize(text)))[0];
	const user = await bot.getUser<WhoUserSchema>(target);
	return message.reply(user.who || randomItem(FALLBACKS));
}
