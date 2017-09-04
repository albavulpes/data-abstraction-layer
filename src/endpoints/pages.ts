import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Page} from '../models/api/Page';

@Route('/pages')
export class PagesEndpoint extends RestEndpoint<Page> {
}