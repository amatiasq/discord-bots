import { ActivitySecretsRaw } from '../api/ActivitySecretsRaw.ts';

export type IActivitySecrets = ReturnType<typeof wrapActivitySecrets>;

export function wrapActivitySecrets(json: ActivitySecretsRaw) {
	return json;
}
