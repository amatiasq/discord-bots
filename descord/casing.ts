import {
	renameObjectKeys,
	camelCaseToSnakeCase,
	snakeCaseToCamelCase,
} from '../amq/casing.ts';

export const toApiCasing = renameObjectKeys(camelCaseToSnakeCase);
export const fromApiCasing = renameObjectKeys(snakeCaseToCamelCase);
