// import './bots/Marti.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { Client } from './descord/Client.ts';
import { Intent } from './descord/enum/Intent.ts';

const env = config();

const client = new Client('718001826200420415', env.MARTI_TOKEN, [
	Intent.GUILDS,
	Intent.GUILD_MESSAGES,
	Intent.GUILD_MESSAGE_REACTIONS,
]);

client.init();
