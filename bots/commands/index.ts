import { Bot } from '../../src/Bot.ts';
import { Applied } from '../../src/mixin.ts';
import { IgnoreMixin } from '../../src/mixins/IgnoreMixin.ts';
import algunMensajePara from './algun-mensaje-para.ts';
import ayuda from './ayuda.ts';
import dileA from './dile-a.ts';
import encuesta from './encuesta.ts';
import ignoraA from './ignora-a.ts';
import quienEs from './quien-es.ts';
import { DatabaseMixin } from '../../src/mixins/DatabaseMixin.ts';

export function applyCommands(
	bot: Applied<typeof Bot, DatabaseMixin, IgnoreMixin>,
) {
	bot.command('di ', async (bot, message, text) => message.channel.send(text));

	bot.alias('help', 'ayuda');
	bot.alias('hay algun mensaje para', 'algun mensaje para');

	bot.command('ignora a', ignoraA);
	bot.command('ayuda', ayuda);
	bot.command('dile a', dileA);
	bot.command('quien es', quienEs);
	bot.command('encuesta', encuesta);
	bot.command('algun mensaje para', algunMensajePara);
}
