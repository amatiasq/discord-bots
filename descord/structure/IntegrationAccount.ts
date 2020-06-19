import { RawIntegrationAccount } from '../raw/RawIntegrationAccount.ts';
import { AccountId } from '../type-aliases.ts';

export interface IntegrationAccount {
	/** id of the account */
	id: AccountId;
	/** name of the account */
	name: string;
}


export function wrapIntegrationAccount(x: RawIntegrationAccount): IntegrationAccount {
	return x;
};

export function unwrapIntegrationAccount(x: IntegrationAccount): RawIntegrationAccount {
	return x;
};

