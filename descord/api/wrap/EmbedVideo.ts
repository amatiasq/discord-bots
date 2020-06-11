import { EmbedVideoRaw } from '../raw/EmbedVideoRaw.ts';

export type EmbedVideo = ReturnType<typeof wrapEmbedVideo>;

export function wrapEmbedVideo(x: EmbedVideoRaw) {
	return x;
}

export function unwrapEmbedVideo(x: EmbedVideo): EmbedVideoRaw {
	return x;
}
