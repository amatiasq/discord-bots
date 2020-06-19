import { ApiCaller } from './ApiCaller.ts';
import { GATEWAY_BOT, CHANNEL_MESSAGES } from './endpoint-urls.ts';
import { wrapBotGatewayData } from '../structure/BotGatewayData.ts';

export class DiscordEndpoints {
	private readonly api: ApiCaller;

	constructor(token: string) {
		this.api = new ApiCaller(token);
	}

	gatewayBot() {
		return this.api.get(GATEWAY_BOT).then(wrapBotGatewayData);
	}

	// async sendMessage(channel: Channel, message: CreateMessagePayload) {
	// 	return this.api.post(CHANNEL_MESSAGES(channel.id), message);
	// }
}
