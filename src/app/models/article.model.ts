export class Article {
    id: number;
    title: string;
    content: string;
    slug: string;
    visibility: string;
    created_at: string;
    updated_at: string;

    constructor(
        id: number,
        title: string,
        content: string,
        slug: string,
        visibility: string,
        created_at: string,
        updated_at: string
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.slug = slug;
        this.visibility = visibility;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
