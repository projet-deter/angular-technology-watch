import { Deserializable } from './deserializable.model';
import { User } from './user.model';
import { Category } from './category.model';

export class Article implements Deserializable {
    id: number;
    title: string;
    description: string;
    body: string;
    userId: number;
    user: User;
    categories: Category[];
    createdAt: string;
    updatedAt: string;

    constructor(
        id: number,
        title: string,
        description: string,
        body: string,
        userId: number,
        user: User,
        categories: Category[],
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.body = body;
        this.userId = userId;
        this.user = user;
        this.categories = categories;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
