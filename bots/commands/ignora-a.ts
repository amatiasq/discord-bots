import { ExtendedMessage } from './../../src/discord/Message.ts';
import { Bot } from '../../src/Bot.ts';
import { IgnoreMixin } from '../../src/mixins/IgnoreMixin.ts';
import { Applied } from '../../src/mixin.ts';

const gods = ['326474946996076556', '370218583675895809'];

export default async function (
	bot: Applied<typeof Bot, IgnoreMixin>,
	message: ExtendedMessage,
) {
	if (!gods.includes(String(message.author.id))) {
		return;
	}

	const target = message.firstMention;

	if (!target) {
		return;
	}

	const isIgnoring = await bot.ignore(target.user);
	return message.reply(isIgnoring ? 'eso está hecho' : 'vale, le haré caso');
}
