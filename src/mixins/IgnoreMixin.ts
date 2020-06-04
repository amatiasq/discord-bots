import { ExtendedMessage } from './../discord/Message.ts';
import { UserPayload } from 'https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/types/guild.ts';
import { DatabaseMixin, DbUsers, UserSchema } from './DatabaseMixin.ts';

export type IgnoreMixin = ReturnType<typeof ignoreMixin>;

export interface IgnorableUserSchema extends UserSchema {
	ignore: boolean;
}

export type DbIgnorableUsers = DbUsers<IgnorableUserSchema>;

export function ignoreMixin(parent: DatabaseMixin) {
	return class IgnoreMixin extends parent {
		private readonly ignoreCache = new Map<string, boolean>();
		protected readonly users!: DbIgnorableUsers;

		async ignore({ id }: UserPayload, message: ExtendedMessage) {
			const user = await this.users!.get(id);
			const wasIgnoring = user.ignore;

			user.ignore = !user.ignore;
			this.ignoreCache.set(user.id, user.ignore);

			await this.users.set(id, user);

			if (message) {
				message.reply(wasIgnoring ? 'vale, le haré caso' : 'eso está hecho');
			}
		}

		async isIgnoring({ id }: UserPayload) {
			if (!this.ignoreCache.has(id)) {
				const user = await this.users.get(id);
				this.ignoreCache.set(id, user.ignore || false);
			}

			return Boolean(this.ignoreCache.get(id));
		}

		async hear(message: ExtendedMessage) {
			if (await this.isIgnoring(message.author)) {
				return false;
			}

			return super.hear(message);
		}
	};
}
