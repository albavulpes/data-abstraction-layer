import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Chapter} from '../models/api/Chapter';

@Route('/chapters')
export class ChaptersEndpoint extends RestEndpoint<Chapter> {
}