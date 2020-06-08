import { config } from 'https://deno.land/x/dotenv/mod.ts';

import { Bot } from '../src/Bot.ts';
import { mixin } from '../src/mixin.ts';
import { databaseMixin } from '../src/mixins/DatabaseMixin.ts';
import { ignoreMixin } from '../src/mixins/IgnoreMixin.ts';
import { learnMixin } from '../src/mixins/LearnMixin.ts';
import { messagesMixin } from '../src/mixins/MessagesMixin.ts';
import { nicksMixin } from '../src/mixins/NicksMixin.ts';
import { pointsMixin } from '../src/mixins/PointsMixin.ts';
import { triviaMixin } from '../src/mixins/TriviaMixin.ts';
import { connectMongo } from '../src/mongodb.ts';
import { applyCommands, applyMiddleware } from './util.ts';

const env = config();

const MartiBot = mixin(Bot, [
	databaseMixin,
	messagesMixin,
	ignoreMixin,
	nicksMixin,
	learnMixin,
	pointsMixin,
	triviaMixin,
]);

const marti = new MartiBot({
	id: '718001826200420415',
	token: env.MARTI_TOKEN,
	prefixes: ['marti'],
	isHearSelfEnabled: false,
	isHearBotEnabled: true,

	db: connectMongo(env.MONGODB_URI),

	messages: {
		FALLBACK: 'HOLA',
	},

	unhandled(bot, message) {
		bot.log(`UNHANDLED`, message.clean);
	},
});

applyMiddleware(marti);
applyCommands(marti);

marti.connect();
