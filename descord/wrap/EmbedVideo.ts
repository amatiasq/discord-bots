import { RawEmbedVideo } from '../raw/RawEmbedVideo.ts';
import { integer } from '../../type-aliases.ts';

export interface EmbedVideo {
	/** source url of video */
	url?: string;
	/** height of video */
	height?: integer;
	/** width of video */
	width?: integer;
}


export function wrapEmbedVideo(x: RawEmbedVideo): EmbedVideo {
	return x;
};

export function unwrapEmbedVideo(x: EmbedVideo): RawEmbedVideo {
	return x;
};

