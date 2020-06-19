import {
	connectWebSocket,
	isWebSocketCloseEvent,
	WebSocket,
	WebSocketCloseEvent,
} from 'https://deno.land/std@0.50.0/ws/mod.ts';

import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { Intent } from '../enum/Intent.ts';
import { BotGatewayData } from '../structure/BotGatewayData.ts';
import {
	DiscordPayload,
	wrapDiscordPayload,
} from '../structure/DiscordPayload.ts';
import { DiscordEvent } from '../enum/DiscordEvent.ts';

export class DiscordSocket {
	private readonly identity = getIdentityPayload(this.token, this.intents);
	private socket: WebSocket | null = null;
	private sequenceNumber: number | null = null;
	private sessionId: string | null = null;

	constructor(
		private readonly token: string,
		private readonly intents: Intent[],
		private readonly gateway: BotGatewayData,
	) {}

	async connect() {
		this.socket = await connectWebSocket(this.gateway.url);

		await this.socket.send(
			JSON.stringify({ op: GatewayOpCode.Identify, d: this.identity }),
		);

		for await (const message of this.socket) {
			if (typeof message === 'string') {
				this.onMessage(wrapDiscordPayload(JSON.parse(message)));
			} else if (isWebSocketCloseEvent(message)) {
				this.onClose(message);
			}
		}
	}

	private onClose(message: WebSocketCloseEvent) {
		console.log('CLOSED', message);
		// 	postDebug({ type: "websocketClose", data: { shardID, message } });
		// 	// These error codes should just crash the projects
		// 	if ([4004, 4005, 4012, 4013, 4014].includes(message.code)) {
		// 	  logRed(`Close :( ${JSON.stringify(message)}`);
		// 	  postDebug({ type: "websocketErrored", data: { shardID, message } });
		// 	  throw new Error(
		// 		"Shard.ts: Error occurred that is not resumeable or able to be reconnected.",
		// 	  );
		// 	}
		// 	// These error codes can not be resumed but need to reconnect from start
		// 	if ([4003, 4007, 4008, 4009].includes(message.code)) {
		// 	  postDebug(
		// 		{ type: "websocketReconnecting", data: { shardID, message } },
		// 	  );
		// 	  createShard(botGatewayData, identifyPayload);
		// 	} else {
		// 	  needToResume = true;
		// 	  resumeConnection(botGatewayData, identifyPayload);
		// 	}
		//   }
	}

	private onMessage(payload: DiscordPayload) {
		// console.log('MESSAGE', payload);

		if (payload.s) this.sequenceNumber = payload.s;

		switch (payload.op) {
			case GatewayOpCode.Hello:
				this.sendHeartbeat(payload.d.heartbeatInterval);
				break;
			//   case GatewayOpCode.Reconnect:
			//   case GatewayOpCode.InvalidSession:
			// 	// When d is false we need to reidentify
			// 	if (!data.d) {
			// 	  postDebug({ type: "invalidSession", data: { shardID } });
			// 	  createShard(botGatewayData, identifyPayload);
			// 	  break;
			// 	}
			// 	needToResume = true;
			// 	resumeConnection(botGatewayData, identifyPayload);
			// 	break;
			default:
				switch (payload.t) {
					case DiscordEvent.READY:
						this.sessionId = payload.d.sessionId;
						break;
					case DiscordEvent.GUILD_CREATE:
						console.log(payload.d);
				}

			// 	if (data.t === "RESUMED") {
			// 	  postDebug({ type: "resumed", data: { shardID } });

			// 	  needToResume = false;
			// 	  break;
			// 	}
			// 	// Important for RESUME
			// 	if (data.t === "READY") {
			// 	  sessionID = (data.d as ReadyPayload).session_id;
			// 	}

			// 	// Update the sequence number if it is present

			// 	// @ts-ignore
			// 	postMessage(
			// 	  {
			// 		type: "HANDLE_DISCORD_PAYLOAD",
			// 		payload: message,
			// 		resumeInterval,
			// 		shardID,
			// 	  },
			// 	);
			// 	break;
		}
	}

	private async sendHeartbeat(interval: number) {
		await delay(interval);

		this.socket!.send(
			JSON.stringify({
				op: GatewayOpCode.Heartbeat,
				d: this.sequenceNumber,
			}),
		);

		this.sendHeartbeat(interval);
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

// TODO: If a client does not receive a heartbeat ack between its attempts at sending heartbeats, it should immediately terminate the connection with a non-1000 close code, reconnect, and attempt to resume.
function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
