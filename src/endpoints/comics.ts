import {RestEndpoint} from '../base/RestEndpoint';
import {Route} from '../decorators/Route';
import {Comic} from '../models/api/Comic';

@Route('/comics')
export class ComicsEndpoint extends RestEndpoint<Comic> {
}