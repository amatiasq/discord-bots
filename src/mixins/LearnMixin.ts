import { Collection } from '../mongodb.ts';
import { randomItem } from '../util/array.ts';
import { DatabaseMixin } from './DatabaseMixin.ts';

type LearnType = string;

export type LearnMixin = ReturnType<typeof learnMixin>;

export interface LearnSchema {
	type: LearnType;
	nick: string;
	text: string;
}

export function learnMixin(parent: DatabaseMixin) {
	return class LearnMixin extends parent {
		protected readonly _learn = this.db.learn as Collection<LearnSchema>;

		async learn(type: LearnType, nick: string, text: string) {
			this._learn.push({ type, text, nick });
		}

		async getLearnt(type: LearnType, index: number | null = null) {
			const list = await this._learn.find({ type });
			const result = index == null ? randomItem(list) : list[index];
			return `${result.text} (by ${result.nick})`;
		}

		async count(type: LearnType) {
			const list = await this._learn.find({ type });
			return list.length;
		}
	};
}
