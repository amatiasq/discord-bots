import {
	MongoClient,
	Collection,
} from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

const client = new MongoClient();

export type Database = {
	[key: string]: Collection;
}; //ReturnType<typeof connectMongo>;

export function connectMongo(mongodbUri: string) {
	client.connectWithUri(mongodbUri);
	const db = client.database('discord-bots');

	return new Proxy({} as Database, {
		get(target, prop, receiver) {
			return typeof prop === 'string' ? db.collection(prop) : undefined;
		},
	});
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
