import { TellUserSchema } from './../schemas/TellUserSchema.ts';
import { DatabaseMixin } from './../../src/mixins/DatabaseMixin.ts';
import { Bot } from '../../src/Bot.ts';
import { Applied } from '../../src/mixin.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';

export default async function (
	bot: Applied<typeof Bot, DatabaseMixin>,
	message: ExtendedMessage,
) {
	const user = await bot.getUser<TellUserSchema>(message.author.id);
	const { tell } = user;

	if (!tell || !tell.length) {
		return false;
	}

	if (tell.length === 1) {
		const [{ author, text }] = tell;
		await message.reply(`hay una carta para ti de ${author}: ${text}`);
	} else {
		const response = tell
			.map(({ author, text }) => ` - de ${author}: ${text}`)
			.join('\n');

		await message.reply(`hay varias cartas para ti:\n${response}`);
	}

	user.tell = [];
	user.save();
	return false;
}
