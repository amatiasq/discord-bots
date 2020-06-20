import { RawConnection } from '../raw/RawConnection.ts';
import { Integration, wrapIntegrationPartial } from './Integration.ts';
import { VisibilityType } from '../enum/VisibilityType.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface Connection {
	/** id of the connection account */
	id: string;
	/** the username of the connection account */
	name: string;
	/** the service of the connection (twitch, youtube) */
	type: string;
	/** whether the connection is revoked */
	revoked?: boolean;
	/** an array of partial server integrations */
	integrations?: Array<Partial<Integration>>;
	/** whether the connection is verified */
	verified: boolean;
	/** whether friend sync is enabled for this connection */
	friendSync: boolean;
	/** whether activities related to this connection will be shown in presence updates */
	showActivity: boolean;
	/** visibility of this connection */
	visibility: VisibilityType;
}

export function wrapConnection(x: RawConnection): Connection {
	return {
		...fromApiCasing(x),

		// Ad-hoc
		integrations: x.integrations && x.integrations.map(wrapIntegrationPartial),
	};
}

export function unwrapConnection(x: Connection): RawConnection {
	return toApiCasing(x);
}
