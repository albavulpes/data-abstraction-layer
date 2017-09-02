import {Model, ModelIdentity} from './Model';

export abstract class RestEndpoint<TModel extends Model> {
    abstract async getAll(): Promise<TModel[]>;

    abstract async getSingle(id: ModelIdentity): Promise<TModel>;

    abstract async create(data: TModel): Promise<TModel>;

    abstract async update(id: ModelIdentity, data: TModel): Promise<TModel>;

    abstract async remove(id: ModelIdentity): Promise<TModel>;
}