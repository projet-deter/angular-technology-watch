import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  /**
   * Title of the page
   * @memberof ArticlesComponent
   */
  title = "Les articles";

  constructor(public authService: AuthService, public articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles();
  }

  openModalForm(article?: Article) {
    this.articleService.article = article;
    this.articleService.openModalForm = true;
  }

  openModalView(article: Article) {
    this.articleService.article = article;
    this.articleService.openModalView = true;
  }

  openModalDelete(article: Article) {
    this.articleService.article = article;
    this.articleService.openModalDelete = true;
  }

  isActions(article: Article) {
    return article.userId === this.authService.currentUser.id;
  }
}
