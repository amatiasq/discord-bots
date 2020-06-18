import { integer } from '../type-aliases.ts';

export interface RawEmbedVideo {
	/** source url of video */
	url?: string;
	/** height of video */
	height?: integer;
	/** width of video */
	width?: integer;
}
