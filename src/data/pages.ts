import {api} from '../api';
import {Page} from '../models/api/Page';
import {CacheKeys} from '../models/cache/CacheKeys';

export async function getPage(pageId: string): Promise<Page> {
    const cacheKey = `${CacheKeys.pages}_${pageId}`;
    const cached = store.get(cacheKey) as Page;

    // If no cached object
    if (!cached) {
        const apiResponse = await api.pages.get(pageId);

        // Update cache
        store.set(cacheKey, apiResponse.data);

        return apiResponse.data;
    }

    // If cached was found, do update check
    const apiResponse = await api.pages.get(pageId, cached.Hash);

    // If data has changed in API, then API has sent new data
    if (apiResponse.changed) {
        // Update cache
        store.set(cacheKey, apiResponse.data);

        return apiResponse.data;
    }

    // Otherwise return cached
    return cached;
}
