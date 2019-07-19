import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  /**
   * Article form : create and edit
   * @memberof FormArticleComponent
   */
  articleForm: FormGroup;
  
  constructor(public articleService: ArticleService, public categoryService: CategoryService) { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });

    this.categoryService.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.articleService.article) {
      this.articleForm.patchValue({
        title: this.articleService.article.title,
        description: this.articleService.article.description,
        category: this.articleService.article.categoryId,
      });
    }
  }

  onSubmit() {
    const article: Article = new Article(
      this.articleService.article ? this.articleService.article.id : null,
      this.articleForm.value.title,
      this.articleForm.value.description,
      null,
      this.articleForm.value.category,
      null,
      null,
      null,
      null,
      null,
    );
    console.log(this.articleForm.value.category);
    
    this.articleService.article ? this.articleService.patchArticle(article) : this.articleService.postArticle(article);
  }

  closeModal() {
    this.articleService.article = null;
    this.articleService.openModalForm = false;
  }
}
