import {api} from '../api';
import {Page} from '../models/api/Page';

export async function getPage(pageId: string): Promise<Page> {
    return await api.pages.get(pageId);
}
