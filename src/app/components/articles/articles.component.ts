import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

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

  constructor(public articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles();
  }
}
