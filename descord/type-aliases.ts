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

export type PermissionInteger = '%PermissionInteger%';
export type SerializedDate = '%SerializedDate%';
export type SerializedUnixTimestamp = '%SerializedUnixTimestamp%';

export function unbox<T>(value: any) {
	return value as T;
}
