export interface RawGroupDmAddRecipientPayload {
	/** access token of a user that has granted your app the gdm.join scope */
	access_token: string;
	/** nickname of the user being added */
	nick: string;
}
