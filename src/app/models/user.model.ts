import { Deserializable } from './deserializable.model';

export class User implements Deserializable {
    id: number;
    email: string;
    admin: boolean;
    created_at: string;
    updated_at: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
