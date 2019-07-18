import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Endpoint in the API
   * @memberof UserService
   */
  loginEndpoint = "auth/login";
  registerEndpoint = "auth/register";

  /**
   * Current user
   * @memberof UserService
   */
  currentUser: User;

  constructor(private router: Router, public apiService: ApiService) { }

  login(email: string, password: string) {
    this.apiService.postAuth(this.loginEndpoint, {email, password}).then((res) => {
      this.apiService.ACCESS_TOKEN = res['access_token'];
      this.currentUser = new User(res['id'], res['name'], res['email']);
      this.router.navigate(['/articles']);
    }).catch((err) => {
      console.error('Error : ' + err[0]);
    });     
  }

  register(body: any) {
    this.apiService.postAuth(this.registerEndpoint, body).then((res) => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.error('Error : ' + err[0]);
    });
  }

  logout() {
    this.apiService.ACCESS_TOKEN = null;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}
