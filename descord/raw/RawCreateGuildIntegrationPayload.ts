import { IntegrationId } from '../type-aliases.ts';

export interface RawCreateGuildIntegrationPayload {
	/** the integration type */
	type: string;
	/** the integration id */
	id: IntegrationId;
}
