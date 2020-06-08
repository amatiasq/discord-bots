import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';
import { Applied } from '../../src/mixin.ts';
import { DatabaseMixin } from '../../src/mixins/DatabaseMixin.ts';
import { mention } from '../../src/util/discord.ts';
import { removeStart } from '../../src/util/string.ts';
import { TellUserSchema } from '../chemas/TellUserSchema.ts';

export default async function (
	bot: Applied<typeof Bot, DatabaseMixin>,
	message: ExtendedMessage,
	text: string,
) {
	const target = message.firstMention;

	if (!target) {
		return;
	}

	const user = await bot.getUser<TellUserSchema>(target.user.id);
	const entry = {
		author: message.author.toString(),
		text: removeStart(removeStart(text, String(target.user)), mention(target)),
	};

	if (!user.tell) {
		user.tell = [entry];
	} else {
		user.tell.push(entry);
	}

	await user.save();

	return message.reply(`ok, si veo a ${target} se lo diré`);
}
