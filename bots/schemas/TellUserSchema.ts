import { UserSchema } from '../../src/mixins/DatabaseMixin.ts';

export interface TellUserSchema extends UserSchema {
	tell: Array<{ author: string; text: string }>;
}
