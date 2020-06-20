import { Permission } from './enum/Permission.ts';
import { SystemChannelFlag } from './enum/SystemChannelFlag.ts';

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
export type SystemChannelFlagInteger = '%SystemChannelFlag%';
export type ISO8601Timestamp = '%ISO8601Timestamp%';
export type UnixTimestamp = '%UnixTimestamp%';

export { Permission, SystemChannelFlag };

export const parsePermissionInteger = parseBitFlags<
	Permission,
	PermissionInteger
>(Permission);
export const unparsePermissionInteger = unparseBitFlags<
	Permission,
	PermissionInteger
>(Permission);

export const parseSystemChannelFlagInteger = parseBitFlags<
	SystemChannelFlag,
	SystemChannelFlagInteger
>(SystemChannelFlag);
export const unparseSystemChannelFlagInteger = unparseBitFlags<
	SystemChannelFlag,
	SystemChannelFlagInteger
>(SystemChannelFlag);

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

function parseBitFlags<T, U>(Enum: any) {
	return (value: U): T[] => {
		const flags = (value as any) as number;
		const keys = Object.keys(Enum);
		return keys.filter(x => flags & Enum[x]).map(x => Enum[x]);
	};
}

function unparseBitFlags<T, U>(Enum: any) {
	return (value: T[]): U => {
		throw new Error();
	};
}
