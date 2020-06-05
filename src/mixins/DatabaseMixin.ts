import { Bot, BotOptions } from '../Bot.ts';
import { Collection, Database } from '../mongodb.ts';

export type DatabaseMixin = ReturnType<typeof databaseMixin>;

export interface UserSchema {
	id: string;
	nick: string;
}

export interface MemorySchema {
	id: string;
	value: string;
}
export interface DatabaseMixinOptions extends BotOptions {
	db: Database;
}

export function databaseMixin(parent: typeof Bot) {
	return class DatabaseMixin extends parent {
		protected get db() {
			return this.options.db;
		}

		protected readonly users = this.db.users as Collection<UserSchema>;
		protected readonly memory = this.db.memory as Collection<MemorySchema>;

		constructor(protected readonly options: DatabaseMixinOptions) {
			super(options);
		}
	};
}
