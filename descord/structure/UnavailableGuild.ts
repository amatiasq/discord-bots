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

export function wrapUnavailableGuildPartial(x: Partial<RawUnavailableGuild>): Partial<UnavailableGuild> {
	return x;
};

export function unwrapUnavailableGuildPartial(x: Partial<UnavailableGuild>): Partial<RawUnavailableGuild> {
	return x;
};

