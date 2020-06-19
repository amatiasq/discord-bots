import { RawModifyGuildChannelPositionsPayload } from '../raw/RawModifyGuildChannelPositionsPayload.ts';
import { ChannelId, integer } from '../type-aliases.ts';

export interface ModifyGuildChannelPositionsPayload {
	/** channel id */
	id: ChannelId;
	/** sorting position of the channel */
	position?: integer;
}


export function wrapModifyGuildChannelPositionsPayload(x: RawModifyGuildChannelPositionsPayload): ModifyGuildChannelPositionsPayload {
	return x;
};

export function unwrapModifyGuildChannelPositionsPayload(x: ModifyGuildChannelPositionsPayload): RawModifyGuildChannelPositionsPayload {
	return x;
};

