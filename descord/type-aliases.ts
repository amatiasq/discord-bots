import { Permission } from './enum/Permission.ts';

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

export type PermissionInteger = '%PermissionInteger%';
export type ISO8601Timestamp = '%ISO8601Timestamp%';
export type SerializedUnixTimestamp = '%SerializedUnixTimestamp%';

export { Permission };

export function parsePermissionInteger(value: PermissionInteger): Permission[] {
	const flags = (value as any) as number;
	const keys = Object.keys(Permission) as Array<keyof typeof Permission>;
	return keys.filter(x => flags & Permission[x]).map(x => Permission[x]);
}

export function unparsePermissionInteger(
	value: Permission[],
): PermissionInteger {
	throw new Error();
}

export function parseSerializedISO8601Date(value: ISO8601Timestamp) {
	return new Date(value);
}

export function unparseSerializedISO8601Date(value: Date): ISO8601Timestamp {
	throw new Error();
}

export function parseSerializedUnixTimestamp(value: SerializedUnixTimestamp) {
	const asNumber = (value as any) as number;
	return new Date(asNumber * 1000);
}

export function unparseSerializedUnixTimestamp(
	value: Date,
): SerializedUnixTimestamp {
	throw new Error();
}
