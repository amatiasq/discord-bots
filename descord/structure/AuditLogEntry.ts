import { RawAuditLogEntry } from '../raw/RawAuditLogEntry.ts';
import { AuditLogEvent } from '../enum/AuditLogEvent.ts';
import { AuditLogEntryId, UserId } from '../type-aliases.ts';
import { OptionalAuditEntryInfo, wrapOptionalAuditEntryInfo, unwrapOptionalAuditEntryInfo } from './OptionalAuditEntryInfo.ts';
import { AuditLogChange, wrapAuditLogChange, unwrapAuditLogChange } from './AuditLogChange.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface AuditLogEntry {
	/** id of the affected entity (webhook, user, role, etc.) */
	targetId?: string;
	/** changes made to the targetId */
	changes?: AuditLogChange[];
	/** the user who made the changes */
	userId: UserId;
	/** id of the entry */
	id: AuditLogEntryId;
	/** type of action that occurred */
	actionType: AuditLogEvent;
	/** additional info for certain action types */
	options?: OptionalAuditEntryInfo;
	/** the reason for the change (0-512 characters) */
	reason?: string;
}


export function wrapAuditLogEntry(x: RawAuditLogEntry): AuditLogEntry {
	return {
		...fromApiCasing(x),
		changes: x.changes && x.changes.map(wrapAuditLogChange),
		options: x.options && wrapOptionalAuditEntryInfo(x.options),
	};
}

export function unwrapAuditLogEntry(x: AuditLogEntry): RawAuditLogEntry {
	return {
		...toApiCasing(x),
		changes: x.changes && x.changes.map(unwrapAuditLogChange),
		options: x.options && unwrapOptionalAuditEntryInfo(x.options),
	};
}

export const wrapAuditLogEntryPartial = wrapAuditLogEntry as (x: Partial<RawAuditLogEntry>) => Partial<AuditLogEntry>;

export const unwrapAuditLogEntryPartial = unwrapAuditLogEntry as (x: Partial<AuditLogEntry>) => Partial<RawAuditLogEntry>;


