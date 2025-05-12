import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { User } from '../types/user';
import { UserRole } from '../enums/user-role';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UsersService],
})
export class LoginComponent {
  loginForm: FormGroup;
  users!: User[];
  notValid!: boolean;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.users = this.usersService.getUsers();
    this.notValid = false;
  }

  login() {
    let currentUserRole = this.users.find(
      (u) =>
        u.username == this.loginForm.value.username &&
        u.password == this.loginForm.value.password
    )?.userRole;

    // if (currentUserRole) {
    //   this.loginForm.reset();
    // }
    
    if (currentUserRole == UserRole.GYMTEACHER)
      this.router.navigate(['./lesson']);
    else if (currentUserRole == UserRole.SECRETARY)
      this.router.navigate(['./registered']);
    else this.notValid = true;
  }
}
