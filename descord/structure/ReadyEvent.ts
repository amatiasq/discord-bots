import { RawReadyEvent } from '../raw/RawReadyEvent.ts';
import { integer } from '../type-aliases.ts';
import { UnavailableGuild, wrapUnavailableGuild, unwrapUnavailableGuild } from './UnavailableGuild.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ReadyEvent {
	/** gateway version */
	v: integer;
	/** information about the user including email */
	user: User;
	/** empty array */
	privateChannels: [];
	/** the guilds the user is in */
	guilds: UnavailableGuild[];
	/** used for resuming connections */
	sessionId: string;
	/** the shard information associated with this session, if sent when identifying. array of two integers (shardId, numShards) */
	shard?: [integer, integer];
}


export function wrapReadyEvent(x: RawReadyEvent): ReadyEvent {
	return {
		...fromApiCasing(x),
		user: wrapUser(x.user),
		guilds: x.guilds.map(wrapUnavailableGuild),
	};
};

export function unwrapReadyEvent(x: ReadyEvent): RawReadyEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
		guilds: x.guilds.map(unwrapUnavailableGuild),
	};
};

