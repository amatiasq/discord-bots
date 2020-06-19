import { ChannelId, integer } from '../type-aliases.ts';

export interface RawModifyGuildChannelPositionsPayload {
	/** channel id */
	id: ChannelId;
	/** sorting position of the channel */
	position?: integer;
}
