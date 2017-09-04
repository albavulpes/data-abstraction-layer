import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Chapter} from '../models/Chapter';

@Route('/chapters')
export class ChaptersEndpoint extends RestEndpoint<Chapter> {
}