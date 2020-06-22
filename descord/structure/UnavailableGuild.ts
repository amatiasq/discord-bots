import { RawUnavailableGuild } from '../raw/RawUnavailableGuild.ts';
import { GuildId } from '../type-aliases.ts';

export interface UnavailableGuild {
	id: GuildId;
	unavailable: true;
}


export function wrapUnavailableGuild(x: RawUnavailableGuild): UnavailableGuild {
	return x;
}

export function unwrapUnavailableGuild(x: UnavailableGuild): RawUnavailableGuild {
	return x;
}

export const wrapUnavailableGuildPartial = wrapUnavailableGuild as (x: Partial<RawUnavailableGuild>) => Partial<UnavailableGuild>;

export const unwrapUnavailableGuildPartial = unwrapUnavailableGuild as (x: Partial<UnavailableGuild>) => Partial<RawUnavailableGuild>;
