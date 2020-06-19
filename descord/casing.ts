import {
	renameObjectKeys,
	camelCaseToSnakeCase,
	snakeCaseToPascalCase,
	snakeCaseToCamelCase,
} from '../amq/casing.ts';

export const toApiCasing = renameObjectKeys(camelCaseToSnakeCase);
export const fromApiCasing = renameObjectKeys(snakeCaseToCamelCase);
