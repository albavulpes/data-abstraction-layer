import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Arc} from '../models/Arc';

@Route('/chapters')
export class ArcsEndpoint extends RestEndpoint<Arc> {
}