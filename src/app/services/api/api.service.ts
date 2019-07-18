import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * URL pointing to the backend API
   * @memberof ApiService
   */
  API_URL: string = "http://localhost:3000/";
  ACCESS_TOKEN: string = null;

  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  get(endpoint: string, params: HttpParams) {
    console.log("GET");
    const options = {
      headers: this.headers,
      params: params
    }
    return this._http.get(this.API_URL + endpoint, options);
  }

  post(endpoint: string, body: any) {
    console.log("POST");
    const options = { 
        headers: this.headers,
        params: { access_token: this.ACCESS_TOKEN }
      }
    return this._http.post(this.API_URL + endpoint, body, options);
  }

  patch(endpoint: string, id: number, body: any) {
    console.log("PATCH");
    return this._http.patch(this.API_URL + endpoint + '/' + id, body);
  }

  delete(endpoint: string, id: number) {
    console.log("DELETE");
    return this._http.delete(this.API_URL + endpoint + '/' + id);
  }

  postAuth(endpoint: string, body: any) {
    console.log("POST");
    return this._http.post(this.API_URL + endpoint, body).toPromise();
  }
}
