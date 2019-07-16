import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * URL pointing to the backend API
   * @memberof ApiService
   */
  API_URL: string = "http://localhost:3000/";

  constructor(private _http: Http) { }

  get(endpoint: string) {
    return this._http.get(this.API_URL + endpoint);
  }

  post(endpoint: string, body: any) {
    return this._http.post(this.API_URL + endpoint, body)
  }

  patch(endpoint: string, id: number, body: any) {
    return this._http.patch(this.API_URL + endpoint + '/' + id, body);
  }

  delete(endpoint: string, id: number) {
    return this._http.delete(this.API_URL + endpoint + '/' + id);
  }
}
