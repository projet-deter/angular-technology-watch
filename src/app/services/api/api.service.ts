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

  headers = new HttpHeaders();

  constructor(private _http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', null);
  }

  get(endpoint: string) {
    console.log("GET");
    return this._http.get(this.API_URL + endpoint, { headers: this.headers }).toPromise();
  }

  post(endpoint: string, body: any) {
    console.log("POST");
    return this._http.post(this.API_URL + endpoint, body, { headers: this.headers }).toPromise();
  }

  patch(endpoint: string, id: number, body: any) {
    console.log("PATCH");
    return this._http.patch(this.API_URL + endpoint + '/' + id, body, { headers: this.headers }).toPromise();
  }

  delete(endpoint: string, id: number) {
    console.log("DELETE");
    return this._http.delete(this.API_URL + endpoint + '/' + id, { headers: this.headers }).toPromise();
  }

  postAuth(endpoint: string, body: any) {
    console.log("POST");
    return this._http.post(this.API_URL + endpoint, body).toPromise();
  }
}
