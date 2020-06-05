import {
	MongoClient,
	Collection as MongoCollection,
	Database as MongoDatabase,
} from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

const client = new MongoClient();

export interface Database {
	[key: string]: Collection<any>;
}

export interface Collection<T> {
	find(query: Partial<T>): Promise<T[]>;
	getOrCreate(id: string): Promise<T>;
	create(id: string, value: T): Promise<T>;
	push(value: T): Promise<void>;
	get(id: string): Promise<T>;
	set(id: string, value: T): Promise<void>;
	delete(id: string): Promise<void>;
}

export function connectMongo(mongodbUri: string) {
	client.connectWithUri(mongodbUri);
	const db = client.database('discord-bots');

	return new Proxy({} as Database, {
		get(target, prop, receiver) {
			return typeof prop === 'string'
				? wrapCollection(db, prop, null)
				: undefined;
		},
	});
}

function wrapCollection<T>(db: MongoDatabase, name: string, def: T) {
	const col = db.collection(name);

	function serialize(id: string, value: T) {
		return {
			id,
			value: value && typeof value === 'object' ? { id, ...value } : value,
		};
	}

	function deserialize(data: { id: string; value: T | (T & { id: string }) }) {
		return data.value;
	}

	return {
		async find(query: Partial<T>) {
			return await col.find(query);
		},

		async getOrCreate(id: string): Promise<T> {
			const result = await this.get(id);
			return result || this.create(id, def);
		},

		async create(id: string, value: T): Promise<T> {
			const data = serialize(id, value);
			await col.insertOne(data);
			return deserialize(data);
		},

		async push(value: T) {
			await this.create(String(Math.random()), value);
		},

		async get(id: string): Promise<T> {
			const result = await col.findOne({ id });
			return result && deserialize(result);
		},

		async set(id: string, value: T): Promise<void> {
			const data = serialize(id, value);
			const result = await col.findOne({ id });

			if (result) {
				await col.updateOne({ id }, { $set: data });
			} else {
				await col.insertOne(data);
			}
		},

		async delete(id: string): Promise<void> {
			await col.deleteOne({ id });
		},
	} as Collection<T>;
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
