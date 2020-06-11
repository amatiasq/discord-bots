import { ActivitySecretsRaw } from '../raw/ActivitySecretsRaw.ts';

export type ActivitySecrets = ReturnType<typeof wrapActivitySecrets>;

export function wrapActivitySecrets(json: ActivitySecretsRaw) {
	return json;
}
