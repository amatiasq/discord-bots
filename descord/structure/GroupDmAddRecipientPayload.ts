import { RawGroupDmAddRecipientPayload } from '../raw/RawGroupDmAddRecipientPayload.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GroupDmAddRecipientPayload {
	/** access token of a user that has granted your app the gdm.join scope */
	accessToken: string;
	/** nickname of the user being added */
	nick: string;
}


export function wrapGroupDmAddRecipientPayload(x: RawGroupDmAddRecipientPayload): GroupDmAddRecipientPayload {
	return fromApiCasing(x);
};

export function unwrapGroupDmAddRecipientPayload(x: GroupDmAddRecipientPayload): RawGroupDmAddRecipientPayload {
	return toApiCasing(x);
};

