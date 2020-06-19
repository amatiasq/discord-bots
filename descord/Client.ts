import { Intent } from './enum/Intent.ts';
import { DiscordSocket } from './connection/DiscordSocket.ts';

import { DiscordEndpoints } from './request/DiscordEndpoints.ts';

export class Client {
	private readonly identity = getIdentityPayload(this.token, this.intents);
	private readonly api = new DiscordEndpoints(this.token);
	private socket: DiscordSocket | null = null;

	constructor(
		readonly botId: string,
		readonly token: string,
		readonly intents: Intent[],
	) {}

	async init() {
		const gateway = await this.api.gatewayBot();
		this.socket = new DiscordSocket(this.token, this.intents, gateway);
		this.socket.connect();
	}
}

function getIdentityPayload(token: string, intents: Intent[]) {
	const intents2 = intents.reduce((bits, next) => (bits |= next), 0);

	return {
		token,
		compress: false,
		properties: {
			$os: 'linux',
			$browser: 'Discordeno',
			$device: 'Discordeno',
		},
		intents: intents2,
	};
}
