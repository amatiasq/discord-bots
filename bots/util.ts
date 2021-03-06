import { Bot } from '../discord-bot/Bot.ts';
import { Applied } from '../discord-bot/mixin.ts';
import { DatabaseMixin } from '../discord-bot/mixins/DatabaseMixin.ts';
import { IgnoreMixin } from '../discord-bot/mixins/IgnoreMixin.ts';
import { NicksMixin } from '../discord-bot/mixins/NicksMixin.ts';
import algunMensajePara from './commands/algun-mensaje-para.ts';
import ayuda from './commands/ayuda.ts';
import dileA from './commands/dile-a.ts';
import encuesta from './commands/encuesta.ts';
import ignoraA from './commands/ignora-a.ts';
import quienEs from './commands/quien-es.ts';
import nicknames from './middleware/nicknames.ts';
import tell from './middleware/tell.ts';

export function applyCommands(
	bot: Applied<typeof Bot, DatabaseMixin, IgnoreMixin>,
) {
	bot.command('di ', async (bot, message, text) => message.channel.send(text));

	bot.alias('help', 'ayuda');
	bot.alias('hay algun mensaje para', 'algun mensaje para');
	bot.command('hola', async (bot, message) =>
		message.channel.send(`Hola, soy ${bot.name}`),
	);

	bot.command('ignora a', ignoraA);
	bot.command('ayuda', ayuda);
	bot.command('dile a', dileA);
	bot.command('quien es', quienEs);
	bot.command('encuesta', encuesta);
	bot.command('algun mensaje para', algunMensajePara);
}

export function applyMiddleware(
	bot: Applied<typeof Bot, DatabaseMixin, NicksMixin>,
) {
	bot.middleware(nicknames);
	bot.middleware(tell);
}
