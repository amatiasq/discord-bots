import { config } from 'https://deno.land/x/dotenv/mod.ts';

import { Bot } from './Bot.ts';
import { connectDiscord } from './discord.ts';
import { mixin } from './mixin.ts';
import { databaseMixin, DatabaseMixinOptions } from './mixins/DatabaseMixin.ts';
import { ignoreMixin } from './mixins/IgnoreMixin.ts';
import { learnMixin } from './mixins/LearnMixin.ts';
import { messagesMixin, MessagesMixinOptions } from './mixins/MessagesMixin.ts';
import { nicksMixin } from './mixins/NicksMixin.ts';
import { connectMongo } from './mongodb.ts';

const env = config();

type MartiBotOptions = DatabaseMixinOptions & MessagesMixinOptions;
const MartiBot = mixin(Bot, [
	databaseMixin,
	messagesMixin,
	nicksMixin,
	ignoreMixin,
	learnMixin,
]);

const marti = new MartiBot<MartiBotOptions>({
	id: '718001826200420415',
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

marti.getLearnt;

const discord = connectDiscord(marti.id, env.MARTI_TOKEN, x =>
	marti.onMessage(x),
);
