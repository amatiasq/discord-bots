import { GuildId } from '../type-aliases.ts';

export interface RawUnavailableGuild {
	id: GuildId;
	unavailable: true;
}
