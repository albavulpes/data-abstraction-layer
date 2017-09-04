import {Model, ModelIdentity} from './Model';
import {Payload} from '../models/data/Payload';
import {http} from '../api/http';

export abstract class RestEndpoint<TModel extends Model> {
    protected endpoint: string;

    async getAll(): Promise<Payload<TModel[]>> {
        const response = await http.get(this.endpoint);

        const payload = response.body as Payload<TModel[]>;
        if (payload.error) {
            throw payload.error;
        }
        return payload;
    }

    async get(id: ModelIdentity, hash?: string): Promise<Payload<TModel>> {
        const response = await http.get(`${this.endpoint}/${id}`).query({hash});

        const payload = response.body as Payload<TModel>;
        if (payload.error) {
            throw payload.error;
        }
        return payload;
    }

    async post(data: TModel): Promise<Payload<TModel>> {
        const response = await http.post(this.endpoint).send(data);

        const payload = response.body as Payload<TModel>;
        if (payload.error) {
            throw payload.error;
        }
        return payload;
    }

    async put(id: ModelIdentity, data: TModel): Promise<Payload<TModel>> {
        const response = await http.put(`${this.endpoint}/${id}`).send(data);

        const payload = response.body as Payload<TModel>;
        if (payload.error) {
            throw payload.error;
        }
        return payload;
    }

    async delete(id: ModelIdentity): Promise<Payload<TModel>> {
        const response = await http.delete(`${this.endpoint}/${id}`);

        const payload = response.body as Payload<TModel>;
        if (payload.error) {
            throw payload.error;
        }
        return payload;
    }
}