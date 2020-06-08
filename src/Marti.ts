import { triviaMixin } from './mixins/TriviaMixin.ts';
import { pointsMixin } from './mixins/PointsMixin.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

import { Bot } from './Bot.ts';
import { mixin } from './mixin.ts';
import { databaseMixin } from './mixins/DatabaseMixin.ts';
import { ignoreMixin } from './mixins/IgnoreMixin.ts';
import { learnMixin } from './mixins/LearnMixin.ts';
import { messagesMixin } from './mixins/MessagesMixin.ts';
import { nicksMixin } from './mixins/NicksMixin.ts';
import { connectMongo } from './mongodb.ts';

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

marti.connect();
