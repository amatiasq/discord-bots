// import { Database } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';
import { Bot, BotOptions } from '../Bot.ts';
import { Database } from '../mongodb.ts';

export type DatabaseMixin = ReturnType<typeof databaseMixin>;

export interface UserSchema {
	id: string;
	nick: string;
}

export interface DbUsers<T extends UserSchema> {
	get(id: string): Promise<T>;
	set(id: string, value: Omit<T, 'id'>): Promise<void>;
}

export interface MemorySchema {
	key: string;
	value: string;
}

export interface DbMemory<T extends MemorySchema> {
	get(key: string): Promise<T>;
	set(key: string, value: string): Promise<void>;
	delete(key: string): Promise<void>;
}

export interface DatabaseMixinOptions extends BotOptions {
	db: Database;
}

export function databaseMixin(parent: typeof Bot) {
	return class DatabaseMixin extends parent {
		protected get db() {
			return this.options.db;
		}

		protected readonly users = createUsers(this.db);
		protected readonly memory = createMemory(this.db);

		constructor(protected readonly options: DatabaseMixinOptions) {
			super(options);
		}

		async test() {
			const insertId = await this.db.users.insertOne({
				username: 'user1',
				password: 'pass1',
			});

			console.log(await this.db.users.findOne({ _id: insertId }));
		}
	};
}

function createUsers(db: Database): DbUsers<UserSchema> {
	const col = db.users;

	return {
		async get(id: string): Promise<UserSchema> {
			const result = await col.findOne({ id });
			return result || col.insertOne({ id });
		},

		async set(id: string, value: Omit<UserSchema, 'id'>) {
			const result = await col.findOne({ id });

			if (result) {
				await col.updateOne({ id }, { $set: { id, ...value } });
			} else {
				await col.insertOne({ value });
			}
		},
	};
}

function createMemory(db: Database): DbMemory<MemorySchema> {
	const col = db.memory;

	return {
		async get(key: string): Promise<MemorySchema> {
			const result = await col.findOne({ key });
			return result && result.value;
		},

		async set(key: string, value: string) {
			const result = await col.findOne({ key });

			if (result) {
				await col.updateOne({ key }, { $set: { key, value } });
			} else {
				await col.insertOne({ key, value });
			}
		},

		async delete(key: string) {
			await col.deleteOne({ key });
		},
	};
}
