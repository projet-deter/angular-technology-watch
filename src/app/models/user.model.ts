import { Deserializable } from './deserializable.model';

export class User implements Deserializable {
    id: number;
    name: string;
    email: string;

    constructor(
        id: number,
        name: string,
        email: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
