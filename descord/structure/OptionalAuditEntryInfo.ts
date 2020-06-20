import { RawOptionalAuditEntryInfo } from '../raw/RawOptionalAuditEntryInfo.ts';
import { ChannelId, MessageId, MemberId, RoleId } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface OptionalAuditEntryInfo {
	/** number of days after which inactive members were kicked (Action Type: MEMBERPRUNE) */
	deleteMemberDays: string;
	/** number of members removed by the prune (Action Type: MEMBERPRUNE) */
	membersRemoved: string;
	/** channel in which the entities were targeted (Action Type: MEMBERMOVE & MESSAGEPIN & MESSAGEUNPIN & MESSAGEDELETE) */
	channelId: ChannelId;
	/** id of the message that was targeted (Action Type: MESSAGEPIN & MESSAGEUNPIN) */
	messageId: MessageId;
	/** number of entities that were targeted (Action Type: MESSAGEDELETE & MESSAGEBULKDELETE & MEMBERDISCONNECT & MEMBERMOVE) */
	count: string;
	/** id of the overwritten entity (Action Type: CHANNELOVERWRITECREATE & CHANNELOVERWRITEUPDATE & CHANNELOVERWRITEDELETE) */
	id: MemberId | RoleId;
	/** type of overwritten entity ("member" or "role") (Action Type: CHANNELOVERWRITECREATE & CHANNELOVERWRITEUPDATE & CHANNELOVERWRITEDELETE) */
	type: 'member' | 'role';
	/** name of the role if type is "role" (Action Type: CHANNELOVERWRITECREATE & CHANNELOVERWRITEUPDATE & CHANNELOVERWRITEDELETE) */
	roleName: string;
}


export function wrapOptionalAuditEntryInfo(x: RawOptionalAuditEntryInfo): OptionalAuditEntryInfo {
	return fromApiCasing(x);
};

export function unwrapOptionalAuditEntryInfo(x: OptionalAuditEntryInfo): RawOptionalAuditEntryInfo {
	return toApiCasing(x);
};

