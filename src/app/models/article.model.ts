import { Deserializable } from './deserializable.model';
import { User } from './user.model';
import { Category } from './category.model';

export class Article implements Deserializable {
    id: number;
    title: string;
    content: string;
    visibility: string;
    user_id: number;
    user: User;
    categories: Category[];
    created_at: string;
    updated_at: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
