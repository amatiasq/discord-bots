import { RawCreateGuildIntegrationPayload } from '../raw/RawCreateGuildIntegrationPayload.ts';
import { IntegrationId } from '../type-aliases.ts';

export interface CreateGuildIntegrationPayload {
	/** the integration type */
	type: string;
	/** the integration id */
	id: IntegrationId;
}


export function wrapCreateGuildIntegrationPayload(x: RawCreateGuildIntegrationPayload): CreateGuildIntegrationPayload {
	return x;
};

export function unwrapCreateGuildIntegrationPayload(x: CreateGuildIntegrationPayload): RawCreateGuildIntegrationPayload {
	return x;
};

export function wrapCreateGuildIntegrationPayloadPartial(x: Partial<RawCreateGuildIntegrationPayload>): Partial<CreateGuildIntegrationPayload> {
	return x;
};

export function unwrapCreateGuildIntegrationPayloadPartial(x: Partial<CreateGuildIntegrationPayload>): Partial<RawCreateGuildIntegrationPayload> {
	return x;
};

