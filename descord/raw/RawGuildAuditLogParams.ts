import { UserId, AuditLogEntryId, integer } from '../type-aliases.ts';
import { AuditLogEvent } from '../enum/AuditLogEvent.ts';

export interface RawGuildAuditLogParams {
	/** filter the log for actions made by a user */
	user_id?: UserId;
	/** the type of audit log event */
	action_type?: AuditLogEvent;
	/** filter the log before a certain entry id */
	before?: AuditLogEntryId;
	/** how many entries are returned (default 50, minimum 1, maximum 100) */
	limit?: integer;
}
