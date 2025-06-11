import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormsModule,Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../types/user';
import { UserRole } from '../../enums/user-role';
import { Title } from '@angular/platform-browser';
import { HighlightEmptyDirective } from '../../directive/highlight-empty.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf,HighlightEmptyDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UsersService]
})
export class LoginComponent {
  loginForm: FormGroup;
  users!: User[];
  notValid!: boolean;
  constructor(public router: Router,private formBuilder: FormBuilder,private usersService: UsersService,private title: Title) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.users = this.usersService.getUsers();
    this.notValid = false;
    this.title.setTitle('Login');

    if (localStorage.getItem('userRole') != null) 
      this.checkRole();
  }

  login() {
    if (this.loginForm.controls['username'].invalid || this.loginForm.controls['password'].invalid)
       this.notValid = true;
    else {
      const currentUser = this.usersService.getUser(this.loginForm.value);

      if (currentUser == null) 
          this.notValid = true;
      else{
        this.notValid=false;
        localStorage.setItem('userRole', currentUser!.userRole.toString());
        this.checkRole();
        window.location.reload();
     }
    }
  }

  checkRole() {
    let role = localStorage.getItem('userRole');
    if (role === UserRole.GYMTEACHER.toString()) 
      this.router.navigate(['./lessons']);
    else if (role === UserRole.SECRETARY.toString())
      this.router.navigate(['./registereds']);
    else this.notValid = true;
  }
}
