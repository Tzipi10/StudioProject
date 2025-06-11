import { Injectable } from '@angular/core';
import { UserRole } from '../../enums/user-role';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: User[] = [
    {
      username: 'tzipi',
      password: '1234',
      userRole: UserRole.GYMTEACHER,
    },
    {
      username: 'david',
      password: '5678',
      userRole: UserRole.GYMTEACHER,
    },
    {
      username: 'sara',
      password: 'password123',
      userRole: UserRole.SECRETARY,
    },
    {
      username: 'miriam',
      password: 'abcd1234',
      userRole: UserRole.SECRETARY,
    },
    {
      username: 'nathan',
      password: 'nathanspass',
      userRole: UserRole.GYMTEACHER,
    },
    {
      username: 'helen',
      password: 'secret123',
      userRole: UserRole.SECRETARY,
    }
  ];

  getUsers() {
    return this.users;
  }

  getUser(userDetails: any) {
    return this.users.find(
      (u) => u.username == userDetails.username && u.password == userDetails.password);
  }
}
