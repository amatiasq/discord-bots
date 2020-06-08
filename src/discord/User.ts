import { UserPayload } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/guild.ts';

export type ExtendedUser = ReturnType<typeof wrapUser>;

export function wrapUser(user: UserPayload) {
	return {
		...user,
		toString() {
			return `<@!${user.id}>`;
		},
	};
}
