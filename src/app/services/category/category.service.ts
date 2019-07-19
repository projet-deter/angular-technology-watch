import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /**
   * Endpoint in the API
   * @memberof CategoryService
   */
  endpoint = "categories";

  /**
   * List of articles
   * @memberof CategorieService
   */
  categories: Array<Category>;

  constructor(public apiService: ApiService) { }

  getCategories() {
    this.apiService.get(this.endpoint).then((res: Array<any>) => {      
      this.categories = res.map((data) => {
        return this.createCategory(data);
      });
    }).catch((err) => {
      console.error('Error : ' + err);
    });
  }

  createCategory(data: any): Category {
    return new Category(
      data['id'],
      data['name'],
    );
  }
}
