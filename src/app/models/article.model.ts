export class Article {
    id: number;
    title: string;
    content: string;
    created_at: string;

    constructor(
        id: number,
        title: string,
        content: string,
        created_at: string
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }
}
