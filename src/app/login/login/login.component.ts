import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.initView();
  }

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  initView() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose(
          [
            Validators.required
          ]
        )
      ],
      password: [
        '',
        Validators.compose(
          [
            Validators.required
          ]
        )
      ]
    });
  }

  login() {
    let uname: string = this.loginForm.controls['username'].value;
    let pass: string = this.loginForm.controls['password'].value;
    this.auth.login(uname, pass);
  }
}
