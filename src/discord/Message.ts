import { sendMessage } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/handlers/channel.ts';
import { addReaction } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/handlers/message.ts';
import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts';

import { Bot } from '../Bot.ts';
import { datetime } from '../util/datetime.ts';
import { containsWord, normalize, remove, trim } from '../util/string.ts';
import { wrapChannel } from './Channel.ts';
import { wrapUser } from './User.ts';

export type ExtendedMessage = ReturnType<typeof wrapMessage>;

export function wrapMessage(message: Message, bot: Bot | null = null) {
	const cleaned = clearMessage(message, bot);
	const log = `[${datetime()}, ${message.guild.name}#${message.channel.name}] ${
		message.author.username
	}: ${message.content}`;

	return {
		...message,

		author: wrapUser(message.author),
		channel: wrapChannel(message.channel),

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

			if (bot) {
				while (target && bot.is(target.user)) {
					index++;
					target = mentions[index];
				}
			}

			return {
				...target,
				user: wrapUser(target.user),
			};
		},

		async reply(content: string) {
			const raw = await sendMessage(
				message.channel,
				`${this.author} ${content}`,
			);
			return wrapMessage(raw, bot);
		},

		async react(emoji: string) {
			return addReaction(this, emoji);
		},

		toString() {
			return log;
		},
	};
}

function clearMessage(message: Message, bot: Bot | null) {
	const content = normalize(message.content.replace(/<@!/g, '<@'));

	if (!bot) {
		return content;
	}

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
