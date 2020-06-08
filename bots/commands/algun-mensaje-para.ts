import { TellUserSchema } from './../chemas/TellUserSchema.ts';
import { DatabaseMixin } from '../../src/mixins/DatabaseMixin.ts';
import { Applied } from '../../src/mixin.ts';
import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';

export default async function (
	bot: Applied<typeof Bot, DatabaseMixin>,
	message: ExtendedMessage,
) {
	const target = message.firstMention;

	if (!target) {
		return message.reply('Para quién?');
	}

	const { tell } = await bot.getUser<TellUserSchema>(String(target.user));

	if (!tell || !tell.length) {
		return message.reply('No, nada');
	}

	if (tell.length === 1) {
		const [{ author, text }] = tell;
		await message.reply(`hay un mensaje de ${author}: ${text}`);
		return;
	}

	const list = tell
		.map(({ author, text }) => ` - de ${author}: ${text}`)
		.join('\n');

	return message.reply(`hay varios mensajes:\n${list}`);
}
