import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts';
import Client from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/module/client.ts';
import { Intents } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/options.ts';

export function connectDiscord(
	botID: string,
	token: string,
	onMessage: (message: Message) => void,
) {
	return Client({
		token,
		intents: [
			Intents.GUILDS,
			Intents.GUILD_MESSAGES,
			Intents.GUILD_MESSAGE_REACTIONS,
		],
		eventHandlers: {
			ready: () => console.log(`Ready!`),
			messageCreate: onMessage,
		},
	});
}
