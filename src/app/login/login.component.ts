import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // username: string = '';
  // password: string = '';

  users = [
    {
      username: 'tzipi',
      password: '1234',
      userRole: 'gymTeacher',
    }
  ];

  login() {
    let UserRole = this.users.find(
      (u) =>
        u.username == this.loginForm.value.username &&
        u.password == this.loginForm.value.password
    )?.userRole;
    this.loginForm.reset();
    if (UserRole == 'gymTeacher') 
      this.router.navigate(['./lessonList']);
    else 
      this.router.navigate(['./registers']);
  }
}
