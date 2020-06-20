import { RawInviteMetadata } from '../raw/RawInviteMetadata.ts';
import { integer, parseISO8601Timestamp, unparseISO8601Timestamp } from '../type-aliases.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface InviteMetadata {
	/** number of times this invite has been used */
	uses: integer;
	/** max number of times this invite can be used */
	maxUses: integer;
	/** duration (in seconds) after which the invite expires */
	maxAge: integer;
	/** whether this invite only grants temporary membership */
	temporary: boolean;
	/** when this invite was created */
	createdAt: Date;
}


export function wrapInviteMetadata(x: RawInviteMetadata): InviteMetadata {
	return {
		...fromApiCasing(x),
		createdAt: parseISO8601Timestamp(x.created_at),
	};
}

export function unwrapInviteMetadata(x: InviteMetadata): RawInviteMetadata {
	return {
		...toApiCasing(x),
		created_at: unparseISO8601Timestamp(x.createdAt),
	};
}

export function wrapInviteMetadataPartial(x: Partial<RawInviteMetadata>): Partial<InviteMetadata> {
	return {
		...fromApiCasing(x),
		createdAt: x.created_at && parseISO8601Timestamp(x.created_at),
	};
}

export function unwrapInviteMetadataPartial(x: Partial<InviteMetadata>): Partial<RawInviteMetadata> {
	return {
		...toApiCasing(x),
		created_at: x.createdAt && unparseISO8601Timestamp(x.createdAt),
	};
}


