// https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags

export enum SystemChannelFlag {
	/** Suppress member join notifications */
	SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
	/** Suppress server boost notifications */
	SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
}
