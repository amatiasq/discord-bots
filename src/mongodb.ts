import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

const client = new MongoClient();

export interface Database {
	simple(name: string): SimpleCollection;
	collection<T>(name: string): Collection<T>;
}

export interface Collection<T> {
	find(query: Partial<T>): Promise<T[]>;
	findOne(query: Partial<T>): Promise<T | null>;
	create(value: T): Promise<T>;
	push(value: Omit<T, 'id'>): Promise<T>;
	get(id: string): Promise<T | null>;
	save(value: T): Promise<void>;
	delete(id: string): Promise<void>;
}

export interface SimpleCollection {
	get(key: string): Promise<string | null>;
	set(key: string, value: string): Promise<void>;
	delete(key: string): Promise<void>;
}

export function connectMongo(mongodbUri: string): Database {
	client.connectWithUri(mongodbUri);
	const db = client.database('discord-bots');

	return {
		simple(name: string) {
			const col = db.collection(name);

			return {
				async get(key: string) {
					return col.findOne({ key });
				},

				async set(key: string, value: string) {
					const data = { key, value };
					const result = await col.findOne({ key });

					if (result) {
						await col.updateOne({ key }, { $set: data });
					} else {
						await col.insertOne(data);
					}
				},

				async delete(key: string): Promise<void> {
					await col.deleteOne({ key });
				},
			} as SimpleCollection;
		},

		collection<T extends { id: string }>(name: string) {
			const col = db.collection(name);

			return {
				async find(query: Partial<T>) {
					return await col.find(query);
				},

				async findOne(query: Partial<T>) {
					return await col.findOne(query);
				},

				async create(value: T): Promise<T> {
					await col.insertOne(value);
					return value;
				},

				async push(value: Omit<T, 'id'>) {
					const data: T = { ...value, id: String(Math.random()) } as any;
					await this.create(data);
					return data;
				},

				async get(id: string): Promise<T> {
					return col.findOne({ id });
				},

				async save(value: T) {
					const { id } = value;
					const result = await col.findOne({ id });

					if (result) {
						await col.updateOne({ id }, { $set: value });
					} else {
						await col.insertOne(value);
					}
				},

				async delete(id: string): Promise<void> {
					await col.deleteOne({ id });
				},
			} as Collection<T>;
		},
	};
}

// function createDb() {
// 	return new Proxy({
// 		get(target, prop, receiver) {},
// 	});
// }

// const db = client.database('test');
// const users = db.collection('users');

// const insertId = await users.insertOne({
// 	username: 'user1',
// 	password: 'pass1',
// });

// const insertIds = await users.insertMany([
// 	{
// 		username: 'user1',
// 		password: 'pass1',
// 	},
// 	{
// 		username: 'user2',
// 		password: 'pass2',
// 	},
// ]);

// const user1 = await users.findOne({ _id: insertId });

// console.log(user1);

// const all_users = await users.find({ username: { $ne: null } });
// const user1_id = await users.findOne({ _id: { $oid: '<oid>' } });

// const count = await users.count({ username: { $ne: null } });

// const docs = await users.aggregate([
// 	{ $match: { username: 'many' } },
// 	{ $group: { _id: '$username', total: { $sum: 1 } } },
// ]);

// const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
//   { username: { $ne: null } },
//   { $set: { username: "USERNAME" } },
// );

// // updateMany
// const { matchedCount, modifiedCount, upsertedId } = await users.updateMany(
//   { username: { $ne: null } },
//   { $set: { username: "USERNAME" } },
// );

// // deleteOne
// const deleteCount = await users.deleteOne({ _id: insertId });

// // deleteMany
// const deleteCount2 = await users.deleteMany({ username: "test" });
