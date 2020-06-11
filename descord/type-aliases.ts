import { Permissions, Permission } from './api/Permissions.ts';

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

export type PermissionsInteger = '%PermissionInteger%';
export type SerializedDate = '%SerializedDate%';
export type SerializedUnixTimestamp = '%SerializedUnixTimestamp%';

export function parsePermissionsInteger(
	value: PermissionsInteger,
): Permissions[] {
	const flags = (value as any) as number;
	const keys = Object.keys(Permissions) as Permission[];
	return keys.filter(x => flags & Permissions[x]).map(x => Permissions[x]);
}

export function parseSerializedDate(value: SerializedDate) {
	return new Date(value);
}

export function parseSerializedUnixTimestamp(value: SerializedUnixTimestamp) {
	const asNumber = (value as any) as number;
	return new Date(asNumber * 1000);
}
