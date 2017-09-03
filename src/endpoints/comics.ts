import {RestEndpoint} from '../base/RestEndpoint';
import {Comic} from '../models/Comic';
import {Route} from '../decorators/Route';

@Route('/comics')
export class ComicsEndpoint extends RestEndpoint<Comic> {
}

export const comics = new ComicsEndpoint();