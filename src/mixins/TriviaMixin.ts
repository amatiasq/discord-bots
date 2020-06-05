import { Collection } from '../mongodb.ts';
import { randomItem } from '../util/array.ts';
import { DatabaseMixin, DatabaseMixinOptions } from './DatabaseMixin.ts';

const MILLISECONDS_IN_SECONDS = 1000;
const SECONDS_IN_MINUTES = 60;
const MINUTES_IN_HOURS = 60;
const HOURS_IN_DAY = 24;
const MAX_ANSWERS = 5;
const MIN_ANSWERS = 3;
const MAX_SECONDS = 20;
const MIN_SECONDS = 4;
const MAX_ADVANTAGE = 1 / 4;

type PointType = string;

interface PointsSchema {
	id: string;
	user: string;
	type: string;
	points: number;
}

interface TriviaSchema {
	id: string;
	user: string;
	answer: number;
	time: Date;
}

export interface TriviaMixinOptions extends DatabaseMixinOptions {
	MAX_ANSWERS: number;
	MIN_ANSWERS: number;
	MAX_SECONDS: number;
	MIN_SECONDS: number;
}

export type LearnMixin = ReturnType<typeof learnMixin>;

export function learnMixin(parent: DatabaseMixin) {
	return class LearnMixin extends parent {
		protected readonly points = this.db.collection<PointsSchema>('points');
		protected readonly trivia = this.db.collection<TriviaSchema>('trivia');

		get MAX_ANSWERS() {
			return this.options.MAX_ANSWERS || MAX_ANSWERS;
		}

		get MIN_ANSWERS() {
			return this.options.MIN_ANSWERS || MIN_ANSWERS;
		}

		get MAX_SECONDS() {
			return this.options.MAX_SECONDS || MAX_SECONDS;
		}

		get MIN_SECONDS() {
			return this.options.MIN_SECONDS || MIN_SECONDS;
		}

		constructor(protected readonly options: TriviaMixinOptions) {
			super(options);
		}

		async addPoints(type: PointType, user: string, points: number) {
			const entry =
				(await this.points.findOne({ type, user })) ||
				(await this.points.push({ type, user, points: 0 }));

			entry.points += points;
			this.points.save(entry);
		}
	};
}

module.exports = BotSubclass => {
	return class TriviaMixin extends BotSubclass {
		// POINTS

		async addPoints(type, user, points) {
			const entry =
				(await this.db.Points.findOne({ type, user })) ||
				(await this.db.Points.create({ type, user }));

			entry.points = (entry.points || 0) + points;
			return entry.save();
		}

		async getBoard(type) {
			return this.db.Points.find({ type })
				.sort('-points')
				.limit(5)
				.select('user points');
		}

		async getPoints(type, user = null) {
			const entry = await this.db.Points.findOne({ type, user });
			return entry ? entry.points : 0;
		}

		async lowerPoints(type, operator) {
			const key = `points-${type}-lower`;
			const stored = parseInt(await this.db.Memory.get(key), 10);
			const now = new Date();
			const lastLower = new Date(stored || 0);
			const diff =
				Math.round(
					(now - lastLower) / MILLISECONDS_IN_SECONDS / SECONDS_IN_MINUTES,
				) / MINUTES_IN_HOURS;

			if (diff < HOURS_IN_DAY) {
				return HOURS_IN_DAY - diff;
			}

			const points = await this.db.Points.find({ type }).snapshot();

			await Promise.all(
				points.map(entry => {
					const points = Math.ceil(entry.points * (1 - operator));
					return this.db.Points.update(
						{ _id: entry._id },
						{ $set: { points } },
					);
				}),
			);

			this.db.Memory.set(key, Number(now));
			return null;
		}

		async reset(type, user) {
			return this.db.Points.findOneAndUpdate(
				{ type, user },
				{ $set: { points: 0 } },
			);
		}

		// TRIVIA

		async trivia(
			message,
			type,
			list,
			{
				target = message.author,
				maxAnswers = this.MAX_ANSWERS,
				minAnswers = this.MIN_ANSWERS,
				maxSeconds = this.MAX_SECONDS,
				minSeconds = this.MIN_SECONDS,
			} = {},
		) {
			const { index, question, answer } = this._getTriviaEntry(list);
			const [top1, top2] = await this.getBoard(type);
			const userPoints = await this.getPoints(type, target);

			if (
				top1 &&
				top2 &&
				userPoints === top1.points &&
				top1.points - top2.points > top1.points * MAX_ADVANTAGE
			) {
				await message.reply(this.message('TOO_MANY_POINTS'));
				return null;
			}

			const topPoints = top1 && top1.points > 10 ? top1.points : 10;
			const diff = topPoints - userPoints;
			const seconds =
				diff <= 0
					? minSeconds
					: factor(topPoints, diff, maxSeconds, minSeconds + 1);
			const answerCount = factor(topPoints, userPoints, maxAnswers, minAnswers);
			const answers = this._getFakeAnswers(list, answerCount - 1, index);
			const rightAnswerPosition = random(answerCount - 1);

			await this._startTrivia(
				message,
				target,
				rightAnswerPosition + 1,
				seconds,
			);
			answers.splice(rightAnswerPosition, 0, answer);

			return {
				options: answers.map((answer, index) => `${index + 1} - ${answer}`),
				question,
				seconds,
			};
		}

		async resolveTrivia(type, user, text) {
			const match = text.match(/\d+/);
			const response = match && parseInt(match[0], 10);

			if (response == null || isNaN(response)) {
				return null;
			}

			const entry = await this.db.Trivia.findOne({ user });

			if (!entry) {
				return null;
			}

			const success = response === entry.answer;
			const { answer } = entry;

			await entry.remove();

			if (!success) {
				return {
					success: false,
					expected: answer,
					actual: response,
				};
			}

			return { success: true };
		}

		async _startTrivia(message, user, answer, timeout) {
			const id = Math.random();

			this.db.Trivia.bulkWrite([
				{
					deleteMany: { filter: { user } },
				},
				{
					insertOne: { document: { user, id, answer, time: new Date() } },
				},
			]);

			setTimeout(async () => {
				const { n: removed } = await this.db.Trivia.deleteOne({ user, id });

				if (removed) {
					message.reply(this.message('TRIVIA_TIMEOUT'));
				}
			}, timeout * MILLISECONDS_IN_SECONDS);

			return id;
		}

		async _endTrivia(user, id) {}

		_getTriviaEntry(list) {
			const entry = randomItem(list);
			const index = list.indexOf(entry);
			let { question, answer } = entry;

			if (Array.isArray(question)) {
				question = randomItem(question);
			}

			if (Array.isArray(answer)) {
				answer = randomItem(answer);
			}

			return { index, question, answer };
		}

		_getFakeAnswers(list, amount, questionIndex) {
			if (list.length - 1 < amount) {
				return list.map(entry => entry.answer).splice(questionIndex, 1);
			}

			const answers = [];

			while (answers.length < amount) {
				const { index, answer } = this._getTriviaEntry(list);

				if (index !== questionIndex && !answers.includes(answer)) {
					answers.push(answer);
				}
			}

			return answers;
		}
	};
};

function factor(top, current, max, min) {
	if (top === 0) {
		return Math.round(min + (max - min) / 2);
	}

	const diff = max - min;
	const modifier = (diff / top) * current;
	return Math.round(modifier + min);
}
