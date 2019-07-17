import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
    console.log("GET");
    return this._http.get(this.API_URL + endpoint);
  }

  post(endpoint: string, body: any) {
    console.log("POST");
    return this._http.post(this.API_URL + endpoint, body)
  }

  patch(endpoint: string, id: number, body: any) {
    console.log("PATCH");
    return this._http.patch(this.API_URL + endpoint + '/' + id, body);
  }

  delete(endpoint: string, id: number) {
    console.log("DELETE");
    return this._http.delete(this.API_URL + endpoint + '/' + id);
  }
}
