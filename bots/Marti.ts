import { config } from 'https://deno.land/x/dotenv/mod.ts';

import { Bot } from '../discord-bot/Bot.ts';
import { mixin } from '../discord-bot/mixin.ts';
import { databaseMixin } from '../discord-bot/mixins/DatabaseMixin.ts';
import { ignoreMixin } from '../discord-bot/mixins/IgnoreMixin.ts';
import { learnMixin } from '../discord-bot/mixins/LearnMixin.ts';
import { messagesMixin } from '../discord-bot/mixins/MessagesMixin.ts';
import { nicksMixin } from '../discord-bot/mixins/NicksMixin.ts';
import { pointsMixin } from '../discord-bot/mixins/PointsMixin.ts';
import { triviaMixin } from '../discord-bot/mixins/TriviaMixin.ts';
import { connectMongo } from '../discord-bot/mongodb.ts';
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
