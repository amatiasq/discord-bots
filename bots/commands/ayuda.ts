import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';

export default async function (bot: Bot, message: ExtendedMessage) {
	return message.reply(`Puedes decir:\n${bot.help()}`);
}
