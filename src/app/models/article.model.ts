import { Deserializable } from './deserializable.model';

export class Article implements Deserializable {
    id: number;
    title: string;
    content: string;
    visibility: string;
    created_at: string;
    updated_at: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
