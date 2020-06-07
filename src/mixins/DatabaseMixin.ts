import { Bot, BotOptions } from '../Bot.ts';
import { Collection, Database } from '../mongodb.ts';

export type DatabaseMixin = ReturnType<typeof databaseMixin>;

export interface UserSchema {
	id: string;
	nick?: string;
}

export interface DatabaseMixinOptions extends BotOptions {
	db: Database;
}

export function databaseMixin(parent: typeof Bot) {
	return class DatabaseMixin extends parent {
		get db() {
			return this.options.db;
		}

		protected readonly users = this.db.collection<UserSchema>('users');
		protected readonly memory = this.db.simple('memory');

		constructor(protected readonly options: DatabaseMixinOptions) {
			super(options);
		}

		protected async getOrCreateUser<T extends UserSchema>(
			id: string,
		): Promise<T> {
			const col = this.users;
			const result = (await col.get(id)) || (await col.create({ id }));
			return result as T;
		}
	};
}
