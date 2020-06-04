import { Member } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/member.ts';
import { Bot } from '../Bot.ts';
import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts';
import { normalize, trim, containsWord, remove } from '../util/string.ts';
import { wrapUser } from './User.ts';
import { datetime } from '../util/datetime.ts';
import { sendMessage } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/handlers/channel.ts';

export interface ExtendedMessage extends Message {
	readonly isMentioned: boolean;
	readonly clean: string;
	readonly firstMention: Member;
	reply(content: string): Promise<ExtendedMessage>;
	toString(): string;
}

export function wrapMessage(message: Message, bot: Bot): ExtendedMessage {
	const cleaned = clearMessage(message, bot);
	const log = `[${datetime()}, ${message.guild.name}#${message.channel.name}] ${
		message.author.username
	}: ${message.content}`;

	return {
		...message,

		// author: {
		// 	...message.author,
		// 	nick: message.author.username
		// }

		// sendImage(url) {
		// 	self.log('IMG', url);
		// 	return this.channel.send({ embed: { image: { url }}});
		// },

		get isMentioned() {
			return Boolean(cleaned);
		},

		get clean() {
			return cleaned || normalize(message.content);
		},

		get firstMention() {
			const mentions = message.mentions();
			let [target] = mentions;
			let index = 0;

			while (target && bot.is(target.user)) {
				index++;
				target = mentions[index];
			}

			return target;
		},

		async reply(content: string) {
			const raw = await sendMessage(message.channel, content);
			return wrapMessage(raw, bot);
		},

		toString() {
			return log;
		},
	};
}

function clearMessage(message: Message, bot: Bot) {
	const content = normalize(message.content.replace(/<@!/g, '<@'));

	for (const prefix of bot.prefixes) {
		if (trim(normalize(content)) === prefix) {
			return content;
		}

		if (containsWord(content, prefix)) {
			return remove(content, prefix);
		}
	}

	const botMention = message.mentions().find(mention => bot.is(mention.user));

	if (botMention) {
		return remove(message.content, wrapUser(botMention.user));
	}
}
