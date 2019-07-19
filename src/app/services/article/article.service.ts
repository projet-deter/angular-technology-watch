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
   * Return the modal state
   * @memberof ArticleService
   */
  openModalForm: boolean = false;
  openModalView: boolean = false;
  openModalDelete: boolean = false;

  /**
   * List of articles
   * @memberof ArticleService
   */
  articles: Array<Article>;

  /**
   * Article selected
   * @memberof ArticleService
   */
  article: Article = null;

  constructor(public apiService: ApiService) { }

  getArticles() {
    this.apiService.get(this.endpoint).then((res: Array<any>) => {      
      this.articles = res.map((data) => {
        return this.createArticle(data);
      });
    }).catch((err) => {
      console.error('Error : ' + err);
    });
  }

  postArticle(article: Article) {
    const body = {
      'title': article.title,
      'description': article.description,
      'body': article.body,
    }
    this.apiService.post(this.endpoint, body).then((res) => {
      console.log(res);
      console.log('Article created');
    }).catch((err) => {
      console.error('Error : ' + err);
    });
  }

  patchArticle(article: Article) {
    const body = {
      'title': article.title,
      'description': article.description,
      'body': article.body,
    }
    this.apiService.patch(this.endpoint, article.id, body).then((res) => {
      console.log(res);
      console.log('Article updated');
    }).catch((err) => {
      console.error('Error : ' + err);
    });
  }

  deleteArticle(article: Article) {
    this.apiService.delete(this.endpoint, article.id).then((res) => {
      console.log(res);
      this.articles = this.articles.filter((item: Article) => item.id !== article.id)
      console.log('Article removed');
    }).catch((err) => {
      console.error('Error : ' + err);
    });
  }

  createArticle(data: any): Article {
    return new Article(
      data['id'],
      data['title'],
      data['description'],
      data['body'],
      data['user_id'],
      null,
      null,
      data['created_at'],
      data['updated_at'],
    );
  }
}
