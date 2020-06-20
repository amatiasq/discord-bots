import { RawModifyGuildMemberPayload } from '../raw/RawModifyGuildMemberPayload.ts';
import { RoleId, ChannelId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ModifyGuildMemberPayload {
	/** value to set users nickname to (requires permission: MANAGENICKNAMES) */
	nick: string;
	/** array of role ids the member is assigned   (requires permission: MANAGEROLES) */
	roles: RoleId[];
	/** whether the user is muted in voice channels. Will throw a 400 if the user is not in a voice channe (requires permission: MUTEMEMBERS) */
	mute: boolean;
	/** whether the user is deafened in voice channels. Will throw a 400 if the user is not in a voice channel (requires permission: DEAFENMEMBERS) */
	deaf: boolean;
	/** id of channel to move user to (if they are connected to voice) (requires permission: MOVEMEMBERS) */
	channelId: ChannelId;
}


export function wrapModifyGuildMemberPayload(x: RawModifyGuildMemberPayload): ModifyGuildMemberPayload {
	return fromApiCasing(x);
};

export function unwrapModifyGuildMemberPayload(x: ModifyGuildMemberPayload): RawModifyGuildMemberPayload {
	return toApiCasing(x);
};

export function wrapModifyGuildMemberPayloadPartial(x: Partial<RawModifyGuildMemberPayload>): Partial<ModifyGuildMemberPayload> {
	return fromApiCasing(x);
};

export function unwrapModifyGuildMemberPayloadPartial(x: Partial<ModifyGuildMemberPayload>): Partial<RawModifyGuildMemberPayload> {
	return toApiCasing(x);
};

