import { parsePermissionInteger } from '../../type-aliases.ts';
import { OverwriteRaw } from '../raw/OverwriteRaw.ts';

export type Overwrite = ReturnType<typeof wrapOverwrite>;

export function wrapOverwrite(json: OverwriteRaw) {
	return {
		...json,
		allow: parsePermissionInteger(json.allow),
		deny: parsePermissionInteger(json.deny),
	};
}
