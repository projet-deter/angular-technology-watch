import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(public authService: AuthService, public articleService: ArticleService,
    public router: Router) { }

  ngOnInit() {
    this.articleService.getArticles();
  }

  openModalForm(article?: Article) {
    this.articleService.article = article;
    this.articleService.openModalForm = true;
  }

  openModalDelete(article: Article) {
    this.articleService.article = article;
    this.articleService.openModalDelete = true;
  }

  gotoComments(article: Article) {
    this.router.navigate(['/articles/' + article.id + '/comments']);
  }

  isActions(article: Article) {
    return article.userId === this.authService.currentUser.id;
  }
}
