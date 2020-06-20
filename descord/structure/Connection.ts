import { RawConnection } from '../raw/RawConnection.ts';
import { Integration, wrapIntegrationPartial, unwrapIntegrationPartial } from './Integration.ts';
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
	integrations?: Partial<Integration>[];
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
		integrations: x.integrations && x.integrations.map(wrapIntegrationPartial),
	};
};

export function unwrapConnection(x: Connection): RawConnection {
	return {
		...toApiCasing(x),
		integrations: x.integrations && x.integrations.map(unwrapIntegrationPartial),
	};
};

export function wrapConnectionPartial(x: Partial<RawConnection>): Partial<Connection> {
	return {
		...fromApiCasing(x),
		integrations: x.integrations && x.integrations.map(wrapIntegrationPartial),
	};
};

export function unwrapConnectionPartial(x: Partial<Connection>): Partial<RawConnection> {
	return {
		...toApiCasing(x),
		integrations: x.integrations && x.integrations.map(unwrapIntegrationPartial),
	};
};

