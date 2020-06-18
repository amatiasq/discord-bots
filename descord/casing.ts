import {
	renameObjectKeys,
	camelCaseToSnakeCase,
	snakeCaseToPascalCase,
} from '../amq/casing.ts';

export const toApiCasing = renameObjectKeys(camelCaseToSnakeCase);
export const fromApiCasing = renameObjectKeys(snakeCaseToPascalCase);
