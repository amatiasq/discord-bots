import { RawExecuteWebhookPayload } from '../raw/RawExecuteWebhookPayload.ts';

// https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params

export interface ExecuteWebhookPayload {
	/**
	 * waits for server confirmation of message send before response, and returns the created message body
	 * (defaults to false; when false a message that is not saved does not return an error)
	 */
	wait?: boolean;
}


export function wrapExecuteWebhookPayload(x: RawExecuteWebhookPayload): ExecuteWebhookPayload {
	return x;
}

export function unwrapExecuteWebhookPayload(x: ExecuteWebhookPayload): RawExecuteWebhookPayload {
	return x;
}

export const wrapExecuteWebhookPayloadPartial = wrapExecuteWebhookPayload as (x: Partial<RawExecuteWebhookPayload>) => Partial<ExecuteWebhookPayload>;

export const unwrapExecuteWebhookPayloadPartial = unwrapExecuteWebhookPayload as (x: Partial<ExecuteWebhookPayload>) => Partial<RawExecuteWebhookPayload>;
