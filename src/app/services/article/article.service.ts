import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Article } from 'src/app/models/article.model';
import { Observable } from 'rxjs';

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
  articles: Array<Article>;

  constructor(public apiService: ApiService) { }

  getArticles() {
    this.apiService.get(this.endpoint).then((res) => {
      console.log(res);
      
      // this.articles = data.json().map(d => {
      //   return new Article().deserialize(d);
      // });      
    }).catch((err) => {
      //
    });
  }
}
