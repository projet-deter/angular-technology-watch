import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor(public authService: AuthService, public articleService: ArticleService) { }

  ngOnInit() { }

  deleteArticle() {
    if (this.articleService.article.userId === this.authService.currentUser.id) {
      this.articleService.deleteArticle(this.articleService.article);
      this.closeModal();
    } else {
      console.error('Error : it is not your article');
    }
  }

  closeModal() {
    this.articleService.article = null;
    this.articleService.openModalDelete = false;
  }
}
