import { RawUnavailableGuild } from '../raw/RawUnavailableGuild.ts';
import { GuildId } from '../type-aliases.ts';

export interface UnavailableGuild {
	id: GuildId;
	unavailable: true;
}


export function wrapUnavailableGuild(x: RawUnavailableGuild): UnavailableGuild {
	return x;
};

export function unwrapUnavailableGuild(x: UnavailableGuild): RawUnavailableGuild {
	return x;
};

