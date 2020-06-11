import { omit } from '../util/omit.ts';
import { ChannelRaw } from '../api/ChannelRaw.ts';
import { wrapOverwrite } from './Overwrite.ts';
import { wrapUser } from './User.ts';
import { parseSerializedDate } from '../type-aliases.ts';

export type Channel = ReturnType<typeof wrapChannel>;

export function wrapChannel(json: ChannelRaw) {
	return {
		...omit(
			json,

			'guild_id',
			'permission_overwrites',
			'last_message_id',
			'user_limit',
			'rate_limit_per_user',
			'owner_id',
			'application_id',
			'parent_id',
			'last_pin_timestamp',
		),

		// Casing
		guildId: json.guild_id,
		// permissionOverwrites: json.permission_overwrites,
		lastMessageId: json.last_message_id,
		userLimit: json.user_limit,
		rateLimitPerUser: json.rate_limit_per_user,
		ownerId: json.owner_id,
		applicationId: json.application_id,
		parentId: json.parent_id,
		// lastPinTimestamp: json.last_pin_timestamp,

		// Deserialization
		permissionOverwrites:
			json.permission_overwrites &&
			json.permission_overwrites.map(wrapOverwrite),
		recipients: json.recipients?.map(wrapUser),
		lastPinTimestamp:
			json.last_pin_timestamp && parseSerializedDate(json.last_pin_timestamp),
	};
}
