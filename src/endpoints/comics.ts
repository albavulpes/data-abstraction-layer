import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Comic} from '../models/Comic';

@Route('/comics')
export class ComicsEndpoint extends RestEndpoint<Comic> {
}