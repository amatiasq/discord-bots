import { Permission } from './enum/Permission.ts';
import { SystemChannelFlag } from './enum/SystemChannelFlag.ts';
import { UserFlag } from './enum/UserFlag.ts';

export type integer = number;
export type snowflake = '%snowflake%';
export type UserId = '%UserId%';
export type MemberId = '%MemberId%';
export type RoleId = '%RoleId%';
export type GuildId = '%GuildId%';
export type ChannelId = '%ChannelId%';
export type MessageId = '%MessageId%';
export type EmojiId = '%EmojiId%';
export type IntegrationId = '%IntegrationId%';
export type PartyId = '%PartyId%';
export type ApplicationId = '%ApplicationId%';
export type CategoryId = '%CategoryId%';
export type AttachmentId = '%AttachmentId%';
export type WebhookId = '%WebhookId%';
export type VoiceRegionId = '%VoiceRegionId%';
export type AccountId = '%AccountId%';
export type InviteId = '%InviteId%';

export type ImageData = '%ImageData%';
export type PermissionInteger = '%PermissionInteger%';
export type SystemChannelFlagInteger = '%SystemChannelFlagInteger%';
export type UserFlagInteger = '%UserFlagInteger%';
export type ISO8601Timestamp = '%ISO8601Timestamp%';
export type UnixTimestamp = '%UnixTimestamp%';

export { Permission, SystemChannelFlag };

export const {
	parse: parsePermissionInteger,
	unparse: unparsePermissionInteger,
} = bitFlags<Permission, PermissionInteger>(Permission);

export const {
	parse: parseSystemChannelFlagInteger,
	unparse: unparseSystemChannelFlagInteger,
} = bitFlags<SystemChannelFlag, SystemChannelFlagInteger>(SystemChannelFlag);

export const {
	parse: parseUserFlagInteger,
	unparse: unparseUserFlagInteger,
} = bitFlags<UserFlag, UserFlagInteger>(UserFlag);

export function parseISO8601Timestamp(value: ISO8601Timestamp) {
	return new Date(value);
}

export function unparseISO8601Timestamp(value: Date): ISO8601Timestamp {
	throw new Error();
}

export function parseUnixTimestamp(value: UnixTimestamp) {
	const asNumber = (value as any) as number;
	return new Date(asNumber * 1000);
}

export function unparseUnixTimestamp(value: Date): UnixTimestamp {
	return (Number(value) * 1000) as any;
}

function bitFlags<T, U>(Enum: any) {
	return {
		parse: (value: U): T[] => {
			const flags = (value as any) as number;
			const keys = Object.keys(Enum);
			return keys.filter(x => flags & Enum[x]).map(x => Enum[x]);
		},
		unparse: (value: T[]): U => {
			throw new Error();
		},
	};
}
