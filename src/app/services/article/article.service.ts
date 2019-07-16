import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  /**
   * Endpoint in the API
   * @memberof ArticleService
   */
  endpoint = "articles";

  /**
   * List of articles
   * @memberof ArticleService
   */
  articles: Array<Article> = null;

  constructor(public apiService: ApiService) { }

  getArticles() {
    this.apiService.get(this.endpoint).subscribe((data) => {
      this.articles = data.json().map(x => {
        return this.createArticle(x);
      });      
    })
  }

  createArticle(article: Article): Article {
    return new Article(
      article.id,
      article.title,
      article.content,
      article.slug,
      article.visibility,
      article.created_at,
      article.updated_at,
    );
  }
}
