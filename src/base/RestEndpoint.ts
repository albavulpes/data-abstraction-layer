import {Model, ModelIdentity} from './Model';
import {http} from '../api/http';

export abstract class RestEndpoint<TModel extends Model> {
    protected endpoint: string;

    async getAll(): Promise<TModel[]> {
        const response = await http.get(this.endpoint);
        return response.body;
    }

    async get(id: ModelIdentity): Promise<TModel> {
        const response = await http.get(`${this.endpoint}/${id}`);
        return response.body;
    }

    async post(data: TModel): Promise<TModel> {
        const response = await http.post(this.endpoint).send(data);
        return response.body;
    }

    async put(id: ModelIdentity, data: TModel): Promise<TModel> {
        const response = await http.put(`${this.endpoint}/${id}`).send(data);
        return response.body;
    }

    async delete(id: ModelIdentity): Promise<TModel> {
        const response = await http.delete(`${this.endpoint}/${id}`);
        return response.body;
    }
}