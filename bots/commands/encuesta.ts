import { Applied } from '../../src/mixin.ts';
import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';

export default async function (
	bot: Applied<typeof Bot>,
	message: ExtendedMessage,
	text: string,
) {
	const poll = await message.channel.send(text);
	await poll.react('✅');
	await poll.react('⛔');
	return true;
}
