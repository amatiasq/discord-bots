import { AccountId } from '../type-aliases.ts';

export interface RawIntegrationAccount {
	/** id of the account */
	id: AccountId;
	/** name of the account */
	name: string;
}
