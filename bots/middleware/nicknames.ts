import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';
import { Applied } from '../../src/mixin.ts';
import { NicksMixin } from '../../src/mixins/NicksMixin.ts';

export default async function (
	bot: Applied<typeof Bot, NicksMixin>,
	message: ExtendedMessage,
) {
	const nick = message.author.username;
	bot.setNickname(message.author, nick);
	return false;
}
