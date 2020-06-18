import { Intent } from './enum/Intent.ts';

import { DiscordEndpoints } from './request/DiscordEndpoints.ts';

// export async function connect(token: string, botId: string, intent: Intent) {
// 	const instance = new Client(token, botId, intent);
// 	const gateway = instance.get(GATEWAY_BOT);
// 	// TODO: gateway
// 	return instance;
// }

export class Client {
	private gateway: any;

	readonly api = new DiscordEndpoints(this.token);

	constructor(
		readonly token: string,
		readonly botId: string,
		readonly intent: Intent,
	) {}

	async init() {
		this.gateway = await this.api.gatewayBot();
	}
}
