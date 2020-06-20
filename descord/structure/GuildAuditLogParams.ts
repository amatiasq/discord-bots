import { RawGuildAuditLogParams } from '../raw/RawGuildAuditLogParams.ts';
import { UserId, AuditLogEntryId, integer } from '../type-aliases.ts';
import { AuditLogEvent } from '../enum/AuditLogEvent.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface GuildAuditLogParams {
	/** filter the log for actions made by a user */
	userId?: UserId;
	/** the type of audit log event */
	actionType?: AuditLogEvent;
	/** filter the log before a certain entry id */
	before?: AuditLogEntryId;
	/** how many entries are returned (default 50, minimum 1, maximum 100) */
	limit?: integer;
}


export function wrapGuildAuditLogParams(x: RawGuildAuditLogParams): GuildAuditLogParams {
	return fromApiCasing(x);
};

export function unwrapGuildAuditLogParams(x: GuildAuditLogParams): RawGuildAuditLogParams {
	return toApiCasing(x);
};

