import { OverwriteRaw } from '../api/OverwriteRaw.ts';
import { parsePermissionsInteger } from '../type-aliases.ts';

export type Overwrite = ReturnType<typeof wrapOverwrite>;

export function wrapOverwrite(json: OverwriteRaw) {
	return {
		...json,
		allow: parsePermissionsInteger(json.allow),
		deny: parsePermissionsInteger(json.deny),
	};
}
