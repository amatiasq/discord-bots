import { Bot } from '../../src/Bot.ts';
import { ExtendedMessage } from '../../src/discord/Message.ts';
import { Applied } from '../../src/mixin.ts';
import { DatabaseMixin } from '../../src/mixins/DatabaseMixin.ts';
import { removeStart } from '../../src/util/string.ts';
import { TellUserSchema } from '../schemas/TellUserSchema.ts';

export default async function (
	bot: Applied<typeof Bot, DatabaseMixin>,
	message: ExtendedMessage,
	text: string,
) {
	const mention = message.firstMention;

	if (!mention) {
		return;
	}

	const user = await bot.getUser<TellUserSchema>(mention.user.id);
	const entry = {
		author: message.author.toString(),
		text: removeStart(text, String(mention.user)),

		// text: removeStart(
		// 	removeStart(text, String(mention.user)),
		// 	mentionUser(mention.user),
		// ),
	};

	if (!user.tell) {
		user.tell = [entry];
	} else {
		user.tell.push(entry);
	}

	await user.save();
	return message.reply(`ok, si veo a ${mention.user} se lo diré`);
}
