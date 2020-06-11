import { ActivityAssetsRaw } from '../api/ActivityAssetsRaw.ts';

export type IActivityAssets = ReturnType<typeof wrapActivityAssets>;

export function wrapActivityAssets(json: ActivityAssetsRaw) {
	return {
		largeImage: json.large_image,
		largeText: json.large_text,
		smallImage: json.small_image,
		smallText: json.small_text,
	};
}
