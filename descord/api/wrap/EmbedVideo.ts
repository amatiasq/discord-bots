import { EmbedVideoRaw } from '../raw/EmbedVideoRaw.ts';

export type EmbedVideo = ReturnType<typeof wrapEmbedVideo>;

export function wrapEmbedVideo(json: EmbedVideoRaw) {
	return json;
}
