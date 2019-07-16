import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * URL pointing to the backend API
   * @memberof ApiService
   */
  API_URL: string = "http://localhost:3000/";

  constructor() { }
}
