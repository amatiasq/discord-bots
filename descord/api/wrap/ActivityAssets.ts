import { ActivityAssetsRaw } from '../raw/ActivityAssetsRaw.ts';

export type ActivityAssets = ReturnType<typeof wrapActivityAssets>;

export function wrapActivityAssets(json: ActivityAssetsRaw) {
	return {
		largeImage: json.large_image,
		largeText: json.large_text,
		smallImage: json.small_image,
		smallText: json.small_text,
	};
}
