import { Channel } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/channel.ts';
import { sendMessage } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/handlers/channel.ts';
import { wrapMessage } from './Message.ts';

export type ExtendedChannel = ReturnType<typeof wrapChannel>;

export function wrapChannel(channel: Channel) {
	return {
		...channel,

		async send(content: string) {
			const raw = await sendMessage(this, content);
			return wrapMessage(raw);
		},

		toString() {
			return `<#${channel.id}>`;
		},
	};
}
