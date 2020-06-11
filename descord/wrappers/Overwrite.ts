import { OverwriteRaw } from '../api/OverwriteRaw.ts';
import { parsePermissionInteger } from '../type-aliases.ts';

export type Overwrite = ReturnType<typeof wrapOverwrite>;

export function wrapOverwrite(json: OverwriteRaw) {
	return {
		...json,
		allow: parsePermissionInteger(json.allow),
		deny: parsePermissionInteger(json.deny),
	};
}
