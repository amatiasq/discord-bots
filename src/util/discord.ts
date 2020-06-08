import { Member } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/member.ts';

export function mention(user: Member) {
	return String(user).replace(/^<@/, '<@!');
}
