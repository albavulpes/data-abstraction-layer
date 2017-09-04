import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Arc} from '../models/api/Arc';

@Route('/chapters')
export class ArcsEndpoint extends RestEndpoint<Arc> {
}