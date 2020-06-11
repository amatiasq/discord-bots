import { ActivitySecretsRaw } from '../api/ActivitySecretsRaw.ts';

export type ActivitySecrets = ReturnType<typeof wrapActivitySecrets>;

export function wrapActivitySecrets(json: ActivitySecretsRaw) {
	return json;
}
