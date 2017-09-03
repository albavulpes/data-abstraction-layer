import {RestEndpoint} from '../base/RestEndpoint';
import {Model} from '../base/Model';

export function Route<TController extends RestEndpoint<TModel>, TModel extends Model>(endpoint: string): ClassDecorator {
    return ((constructor: new() => TController): void => {
        constructor.prototype.endpoint = endpoint;
    }) as ClassDecorator;
}