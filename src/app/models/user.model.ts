import { Deserializable } from './deserializable.model';

export class User implements Deserializable {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    admin: boolean;
    created_at: string;
    updated_at: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}
