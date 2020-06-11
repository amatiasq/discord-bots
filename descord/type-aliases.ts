import { Permission } from './api/Permission.ts';

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

export type PermissionInteger = '%PermissionInteger%';
export type SerializedDate = '%SerializedDate%';
export type SerializedUnixTimestamp = '%SerializedUnixTimestamp%';

export function parsePermissionInteger(value: PermissionInteger): Permission[] {
	const flags = (value as any) as number;
	const keys = Object.keys(Permission) as Array<keyof Permission>;
	return keys.filter(x => flags & Permission[x]).map(x => Permission[x]);
}

export function parseSerializedDate(value: SerializedDate) {
	return new Date(value);
}

export function parseSerializedUnixTimestamp(value: SerializedUnixTimestamp) {
	const asNumber = (value as any) as number;
	return new Date(asNumber * 1000);
}
