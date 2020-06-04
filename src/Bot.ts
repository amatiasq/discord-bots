// import { Database } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';
import { Message } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts';
import { UserPayload } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/guild.ts';

import { ExtendedMessage, wrapMessage } from './discord/Message.ts';
import { logOnce } from './util/log.ts';
import { padLeft, removeStart, stringish } from './util/string.ts';

const noop = () => {};

export interface BotOptions {
	id: string;
	prefixes: string[];
	isHearBotEnabled?: boolean;
	isHearSelfEnabled?: boolean;
	// db: Database;
	unhandled?: (bot: Bot, message: ExtendedMessage) => boolean | void;
}

type Middleware = (
	bot: Bot,
	message: ExtendedMessage,
) => Promise<boolean> | boolean;

type Command = (
	bot: Bot,
	message: ExtendedMessage,
	text: string,
) => Promise<any>;

export class Bot {
	protected _middleware: Middleware[] = [];
	protected _commands = new Map<string, Command>();
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

	// protected get db() {
	// 	return this.options.db;
	// }

	protected get unhandled() {
		return this.options.unhandled || noop;
	}

	constructor(protected readonly options: BotOptions) {}

	is(user: UserPayload) {
		return user.id === this.id;
	}

	log(type: string, ...message: stringish[]) {
		const upper = padLeft(this.name.toUpperCase(), 6, ' ');
		console.log(`[${upper}][${type}]`, ...message);
	}

	middleware(handler: Middleware) {
		this._middleware.push(handler);
	}

	command(key: string, action: Command) {
		this._commands.set(key, action);
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
}
