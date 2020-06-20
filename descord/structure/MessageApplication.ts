import { RawMessageApplication } from '../raw/RawMessageApplication.ts';
import { ApplicationId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface MessageApplication {
	/** id of the application */
	id: ApplicationId;
	/** id of the embed's image asset */
	coverImage?: string;
	/** application's description */
	description: string;
	/** id of the application's icon */
	icon: string;
	/** name of the application */
	name: string;
}


export function wrapMessageApplication(x: RawMessageApplication): MessageApplication {
	return fromApiCasing(x);
};

export function unwrapMessageApplication(x: MessageApplication): RawMessageApplication {
	return toApiCasing(x);
};

export function wrapMessageApplicationPartial(x: Partial<RawMessageApplication>): Partial<MessageApplication> {
	return fromApiCasing(x);
};

export function unwrapMessageApplicationPartial(x: Partial<MessageApplication>): Partial<RawMessageApplication> {
	return toApiCasing(x);
};

