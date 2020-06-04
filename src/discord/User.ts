import { UserPayload } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/guild.ts';

export interface ExtendedUser extends UserPayload {
	toString(): string;
}

export function wrapUser(user: UserPayload): ExtendedUser {
	return {
		...user,
		toString() {
			return `<@!${user.id}>`;
		},
	};
}
