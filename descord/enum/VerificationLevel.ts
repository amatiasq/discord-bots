export enum VerificationLevel {
	/** unrestricted */
	NONE = 0,
	/** must have verified email on account */
	LOW = 1,
	/** must be registered on Discord for longer than 5 minutes */
	MEDIUM = 2,
	/** (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes */
	HIGH = 3,
	/** ┻━┻ ミヽ(ಠ 益 ಠ)ﾉ彡 ┻━┻ - must have a verified phone number */
	VERY_HIGH = 4,
}
