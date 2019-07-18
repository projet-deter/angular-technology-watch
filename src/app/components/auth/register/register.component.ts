import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /**
   * Register form
   * @memberof RegisterComponent
   */
  registerForm: FormGroup;

  /**
   * Return if password and confirm match
   * @memberof RegisterComponent
   */
  notMatch: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.passwordMatch()) {
      const body = {
        email: this.registerForm.value.email,
        name: this.registerForm.value.name,
        password: this.registerForm.value.password
      }
      this.authService.register(body);
    }
  }

  passwordMatch(): boolean {
    const pass = this.registerForm.value.password;
    const conf = this.registerForm.value.confirm;
    if (pass === conf) {
      return true;
    } else {
      console.error('Error : password not match');
      this.notMatch = true;
      return false;
    }
  }
}
