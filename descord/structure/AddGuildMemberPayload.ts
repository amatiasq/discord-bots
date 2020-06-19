import { RawAddGuildMemberPayload } from '../raw/RawAddGuildMemberPayload.ts';
import { RoleId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface AddGuildMemberPayload {
	/** an oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild	 */
	accessToken: string;
	/** value to set users nickname to (requires permission: MANAGENICKNAMES) */
	nick: string;
	/** array of role ids the member is assigned   (requires permission: MANAGEROLES) */
	roles: RoleId[];
	/** whether the user is muted in voice channel (requires permission: MUTEMEMBERS) */
	mute: boolean;
	/** whether the user is deafened in voice channels (requires permission: DEAFENMEMBERS) */
	deaf: boolean;
}


export function wrapAddGuildMemberPayload(x: RawAddGuildMemberPayload): AddGuildMemberPayload {
	return fromApiCasing(x);
};

export function unwrapAddGuildMemberPayload(x: AddGuildMemberPayload): RawAddGuildMemberPayload {
	return toApiCasing(x);
};

