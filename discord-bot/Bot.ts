import Client from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/module/client.ts';
import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts';
import { UserPayload } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/guild.ts';
import { Intents } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/options.ts';

import { ExtendedMessage, wrapMessage } from './discord/Message.ts';
import { logOnce } from './util/log.ts';
import { padLeft, removeStart, stringish } from './util/string.ts';

const noop = () => {};

export interface BotOptions {
	id: string;
	token: string;
	prefixes: string[];
	isHearBotEnabled?: boolean;
	isHearSelfEnabled?: boolean;
	unhandled?: (bot: Bot, message: ExtendedMessage) => boolean | void;
}

type Middleware<T extends Bot> = (
	bot: T,
	message: ExtendedMessage,
) => Promise<boolean> | boolean;

type Command<T extends Bot> = (
	bot: T,
	message: ExtendedMessage,
	text: string,
) => Promise<any>;

export class Bot {
	constructor(protected readonly options: BotOptions) {}

	protected _middleware: Array<Middleware<Bot>> = [];
	protected _commands = new Map<string, Command<Bot>>();
	protected _alias = new Map<string, string>();

	get id() {
		return this.options.id;
	}

	get isHearBotEnabled() {
		return Boolean(this.options.isHearBotEnabled);
	}

	get isHearSelfEnabled() {
		return Boolean(this.options.isHearSelfEnabled);
	}

	get name() {
		return this.prefixes[0];
	}

	get prefixes() {
		return this.options.prefixes;
	}

	protected get unhandled() {
		return this.options.unhandled || noop;
	}

	is(user: UserPayload) {
		return user.id === this.id;
	}

	log(type: string, ...message: stringish[]) {
		const upper = padLeft(this.name.toUpperCase(), 5, ' ');
		console.log(`[${upper}][${type}]`, ...message);
	}

	middleware(handler: Middleware<this>) {
		this._middleware.push(handler as Middleware<Bot>);
	}

	command(key: string, action: Command<this>) {
		this._commands.set(key, action as Command<Bot>);
		this.cleanCommands();
	}

	alias(alias: string, command: string) {
		this._alias.set(alias, command);
		this.cleanCommands();
	}

	private cleanCommands() {
		for (const [command] of this._commands) {
			this._alias.delete(command);
		}
	}

	connect() {
		return Client({
			token: this.options.token,
			intents: [
				Intents.GUILDS,
				Intents.GUILD_MESSAGES,
				Intents.GUILD_MESSAGE_REACTIONS,
			],
			eventHandlers: {
				ready: () => this.log('Ready!'),
				messageCreate: x => this.onMessage(x),
			},
		});
	}

	onMessage(raw: Message) {
		const isSelf = this.is(raw.author);

		if (!this.isHearSelfEnabled && isSelf) {
			return;
		}

		if (!this.isHearBotEnabled && raw.author.bot && !isSelf) {
			return;
		}

		const message = wrapMessage(raw, this);
		logOnce(message);

		if (message.isMentioned) {
			this.log('HEAR');
		}

		return this.hear(message).catch(error => this.log('ERROR', error));
	}

	async hear(message: ExtendedMessage): Promise<boolean | any> {
		for (const entry of this._middleware) {
			if (await entry(this, message)) {
				this.log('MIDDLEWARE', this._middleware.indexOf(entry));
				return true;
			}
		}

		if (!message.isMentioned) {
			return false;
		}

		if (await this.executeCommand(message)) {
			return true;
		}

		if (!message.author.bot && (await this.unhandled(this, message))) {
			this.log('FALLBACK(HANDLER)');
			return true;
		}

		return false;
	}

	protected executeCommand(
		message: ExtendedMessage,
	): Promise<boolean> | boolean {
		let content = message.clean;
		let run = null;

		for (const [command, handler] of this._commands) {
			if (content.startsWith(command)) {
				this.log(`COMMAND(${command})`, content);
				content = removeStart(content, command);
				run = handler;
				break;
			}
		}

		if (!run) {
			for (const [alias, command] of this._alias) {
				if (content.startsWith(alias)) {
					this.log(`ALIAS(${alias}=>${command})`, content);
					content = removeStart(content, alias);
					run = this._commands.get(command);
					break;
				}
			}
		}

		if (run) {
			return run(this, message, content);
		}

		return false;
	}

	help() {
		const aliases = [...this._alias.keys()];
		const commands = [...this._commands.keys()];

		const list = commands.map(command => {
			const alias = aliases.filter(alias => this._alias.get(alias) === command);
			return alias.length ? `${command} (${alias.join(', ')})` : command;
		});

		return ` - ${list.join('\n - ')}`;
	}
}
