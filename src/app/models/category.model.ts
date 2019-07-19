import { Deserializable } from './deserializable.model';

export class Category implements Deserializable {
    id: number;
    name: string;

    constructor(
        id: number,
        name: string
    ) {
        this.id = id;
        this.name = name;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
