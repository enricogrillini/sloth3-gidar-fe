import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm: FormGroup = this.formBuilder.group({
    username: undefined,
    password: undefined
  });

  error: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  login(): void {

    console.log("login");
    //this.authService.login(this.loginForm.value);
  }

}
