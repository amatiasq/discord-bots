import { ApiCaller } from './ApiCaller.ts';
import { Channel } from '../wrap/Channel.ts';
import { CreateMessagePayload } from '../wrap/CreateMessagePayload.ts';
import { GATEWAY_BOT, CHANNEL_MESSAGES } from './endpoint-urls.ts';

export class DiscordEndpoints {
	private readonly api: ApiCaller;

	constructor(token: string) {
		this.api = new ApiCaller(token);
	}

	async gatewayBot() {
		const response = await this.api.get(GATEWAY_BOT);
	}

	async sendMessage(channel: Channel, message: CreateMessagePayload) {
		return this.api.post(CHANNEL_MESSAGES(channel.id), message);
	}
}
