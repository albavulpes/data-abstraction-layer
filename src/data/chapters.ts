import {api} from '../api';
import {Chapter} from '../models/api/Chapter';
import {CacheKeys} from '../models/cache/CacheKeys';

export async function getChapter(chapterId: string): Promise<Chapter> {
    const cacheKey = `${CacheKeys.pages}_${chapterId}`;
    const cached = store.get(cacheKey) as Chapter;

    // If no cached object
    if (!cached) {
        const apiResponse = await api.chapters.get(chapterId);

        // Update cache
        store.set(cacheKey, apiResponse.data);

        return apiResponse.data;
    }

    // If cached was found, do update check
    const apiResponse = await api.chapters.get(chapterId, cached.Hash);

    // If data has changed in API, then API has sent new data
    if (apiResponse.changed) {
        // Update cache
        store.set(cacheKey, apiResponse.data);

        return apiResponse.data;
    }

    // Otherwise return cached
    return cached;
}