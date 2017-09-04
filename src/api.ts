import {ComicsEndpoint} from './endpoints/comics';
import {ArcsEndpoint} from './endpoints/arcs';
import {ChaptersEndpoint} from './endpoints/chapters';
import {PagesEndpoint} from './endpoints/pages';

export namespace api {
    export const comics = new ComicsEndpoint();
    export const arcs = new ArcsEndpoint();
    export const chapters = new ChaptersEndpoint();
    export const pages = new PagesEndpoint();
}
