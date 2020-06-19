export enum Intent {
	/** Enables the following events:
	 * - GUILD_CREATE
	 * - GUILD_DELETE
	 * - GUILD_ROLE_CREATE
	 * - GUILD_ROLE_UPDATE
	 * - GUILD_ROLE_DELETE
	 * - CHANNEL_CREATE
	 * - CHANNEL_UPDATE
	 * - CHANNEL_DELETE
	 * - CHANNEL_PINS_UPDATE
	 */
	GUILDS = 1 << 0,
	/** Enables the following events:
	 * - GUILD_MEMBER_ADD
	 * - GUILD_MEMBER_UPDATE
	 * - GUILD_MEMBER_REMOVE
	 */
	GUILD_MEMBERS = 1 << 1,
	/** Enables the following events:
	 * - GUILD_BAN_ADD
	 * - GUILD_BAN_REMOVE
	 */
	GUILD_BANS = 1 << 2,
	/** Enables the following events:
	 * - GUILD_EMOJIS_UPDATE
	 */
	GUILD_EMOJIS = 1 << 3,
	/** Enables the following events:
	 * - GUILD_INTEGRATIONS_UPDATE
	 */
	GUILD_INTEGRATIONS = 1 << 4,
	/** Enables the following events:
	 * - WEBHOOKS_UPDATE
	 */
	GUILD_WEBHOOKS = 1 << 5,
	/** Enables the following events:
	 * - INVITE_CREATE
	 * - INVITE_DELETE
	 */
	GUILD_INVITES = 1 << 6,
	/** Enables the following events:
	 * - VOICE_STATE_UPDATE
	 */
	GUILD_VOICE_STATES = 1 << 7,
	/** Enables the following events:
	 * - PRESENCE_UPDATE
	 */
	GUILD_PRESENCES = 1 << 8,
	/** Enables the following events:
	 * - MESSAGE_CREATE
	 * - MESSAGE_UPDATE
	 * - MESSAGE_DELETE
	 */
	GUILD_MESSAGES = 1 << 9,
	/** Enables the following events:
	 * - MESSAGE_REACTION_ADD
	 * - MESSAGE_REACTION_REMOVE
	 * - MESSAGE_REACTION_REMOVE_ALL
	 * - MESSAGE_REACTION_REMOVE_EMOJI
	 */
	GUILD_MESSAGE_REACTIONS = 1 << 10,
	/** Enables the following events:
	 * - TYPING_START
	 */
	GUILD_MESSAGE_TYPING = 1 << 11,
	/** Enables the following events:
	 * - CHANNEL_CREATE
	 * - MESSAGE_CREATE
	 * - MESSAGE_UPDATE
	 * - MESSAGE_DELETE
	 * - CHANNEL_PINS_UPDATE
	 */
	DIRECT_MESSAGES = 1 << 12,
	/** Enables the following events:
	 * - MESSAGE_REACTION_ADD
	 * - MESSAGE_REACTION_REMOVE
	 * - MESSAGE_REACTION_REMOVE_ALL
	 * - MESSAGE_REACTION_REMOVE_EMOJI
	 */
	DIRECT_MESSAGE_REACTIONS = 1 << 13,
	/** Enables the following events:
	 * - TYPING_START
	 */
	DIRECT_MESSAGE_TYPING = 1 << 14,
}
