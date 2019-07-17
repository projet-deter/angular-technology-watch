import { Deserializable } from './deserializable.model';

export class Category implements Deserializable {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
