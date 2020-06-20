import { RawActivityAssets } from '../raw/RawActivityAssets.ts';
import { fromApiCasing, toApiCasing } from '../casing.ts';

export interface ActivityAssets {
	/** the id for a large asset of the activity, usually a snowflake */
	largeImage?: string;
	/** text displayed when hovering over the large image of the activity */
	largeText?: string;
	/** the id for a small asset of the activity, usually a snowflake */
	smallImage?: string;
	/** text displayed when hovering over the small image of the activity */
	smallText?: string;
}


export function wrapActivityAssets(x: RawActivityAssets): ActivityAssets {
	return fromApiCasing(x);
}

export function unwrapActivityAssets(x: ActivityAssets): RawActivityAssets {
	return toApiCasing(x);
}

export const wrapActivityAssetsPartial = wrapActivityAssets as (x: Partial<RawActivityAssets>) => Partial<ActivityAssets>;

export const unwrapActivityAssetsPartial = unwrapActivityAssets as (x: Partial<ActivityAssets>) => Partial<RawActivityAssets>;


