import {RestEndpoint} from '../base/RestEndpoint';
import {Comic} from '../models/Comic';
import {ModelIdentity} from '../base/Model';

export class comics extends RestEndpoint<Comic> {
    getAll(): Promise<Comic[]> {
        return undefined;
    }

    getSingle(id: ModelIdentity): Promise<Comic> {
        return undefined;
    }

    create(data: Comic): Promise<Comic> {
        return undefined;
    }

    update(id: ModelIdentity, data: Comic): Promise<Comic> {
        return undefined;
    }

    remove(id: ModelIdentity): Promise<Comic> {
        return undefined;
    }
}