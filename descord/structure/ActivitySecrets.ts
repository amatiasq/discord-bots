import { RawActivitySecrets } from '../raw/RawActivitySecrets.ts';


export interface ActivitySecrets {
	/** the secret for joining a party */
	join?: string;
	/** the secret for spectating a game */
	spectate?: string;
	/** the secret for a specific instanced ma */
	match?: string;
}


export function wrapActivitySecrets(x: RawActivitySecrets): ActivitySecrets {
	return x;
};

export function unwrapActivitySecrets(x: ActivitySecrets): RawActivitySecrets {
	return x;
};

export function wrapActivitySecretsPartial(x: Partial<RawActivitySecrets>): Partial<ActivitySecrets> {
	return x;
};

export function unwrapActivitySecretsPartial(x: Partial<ActivitySecrets>): Partial<RawActivitySecrets> {
	return x;
};

