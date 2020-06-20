import { RawAduditLog } from '../raw/RawAduditLog.ts';
import { Webhook, wrapWebhook, unwrapWebhook } from './Webhook.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { AuditLogEntry, wrapAuditLogEntry, unwrapAuditLogEntry } from './AuditLogEntry.ts';
import { Integration, wrapIntegration, unwrapIntegration } from './Integration.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface AduditLog {
	/** list of webhooks found in the audit log */
	webhooks: Webhook[];
	/** list of users found in the audit log */
	users: User[];
	/** list of audit log entries */
	auditLogEntries: AuditLogEntry[];
	/** list of partial integration objects */
	integrations: Array<Partial<Integration>>;
}


export function wrapAduditLog(x: RawAduditLog): AduditLog {
	return {
		...fromApiCasing(x),
		webhooks: x.webhooks.map(wrapWebhook),
		users: x.users.map(wrapUser),
		auditLogEntries: x.audit_log_entries.map(wrapAuditLogEntry),
	};
};

export function unwrapAduditLog(x: AduditLog): RawAduditLog {
	return {
		...toApiCasing(x),
		webhooks: x.webhooks.map(unwrapWebhook),
		users: x.users.map(unwrapUser),
		audit_log_entries: x.auditLogEntries.map(unwrapAuditLogEntry),
	};
};

