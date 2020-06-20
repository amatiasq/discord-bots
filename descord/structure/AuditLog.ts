import { fromApiCasing, toApiCasing } from '../casing.ts';
import { RawAuditLog } from '../raw/RawAuditLog.ts';
import {
	AuditLogEntry,
	unwrapAuditLogEntry,
	wrapAuditLogEntry,
} from './AuditLogEntry.ts';
import { Integration, wrapIntegrationPartial } from './Integration.ts';
import { unwrapUser, User, wrapUser } from './User.ts';
import { unwrapWebhook, Webhook, wrapWebhook } from './Webhook.ts';

export interface AuditLog {
	/** list of webhooks found in the audit log */
	webhooks: Webhook[];
	/** list of users found in the audit log */
	users: User[];
	/** list of audit log entries */
	auditLogEntries: AuditLogEntry[];
	/** list of partial integration objects */
	integrations: Array<Partial<Integration>>;
}

export function wrapAuditLog(x: RawAuditLog): AuditLog {
	return {
		...fromApiCasing(x),
		webhooks: x.webhooks.map(wrapWebhook),
		users: x.users.map(wrapUser),
		auditLogEntries: x.audit_log_entries.map(wrapAuditLogEntry),

		// Ad-hoc
		integrations: x.integrations.map(wrapIntegrationPartial),
	};
}

export function unwrapAuditLog(x: AuditLog): RawAuditLog {
	return {
		...toApiCasing(x),
		webhooks: x.webhooks.map(unwrapWebhook),
		users: x.users.map(unwrapUser),
		audit_log_entries: x.auditLogEntries.map(unwrapAuditLogEntry),
	};
}
