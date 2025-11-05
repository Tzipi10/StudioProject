import { Injectable } from '@angular/core';
import { UserRole } from '../../enums/user-role';
import { User } from '../../types/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // מה שבהערה - גרסה עם נתונים מקומיים
  // constructor() {}
  // users: User[] = [
  //   {
  //     username: 'tzipi',
  //     password: '1234',
  //     userRole: UserRole.GYMTEACHER,
  //   },
  //   {
  //     username: 'david',
  //     password: '5678',
  //     userRole: UserRole.SECRETARY,
  //   },
  //   {
  //     username: 'sara',
  //     password: 'password123',
  //     userRole: UserRole.SECRETARY,
  //   },
  //   {
  //     username: 'miriam',
  //     password: 'abcd1234',
  //     userRole: UserRole.SECRETARY,
  //   },
  //   {
  //     username: 'nathan',
  //     password: 'nathanspass',
  //     userRole: UserRole.GYMTEACHER,
  //   },
  //   {
  //     username: 'helen',
  //     password: 'secret123',
  //     userRole: UserRole.SECRETARY,
  //   }
  // ];

  // getUsers() {
  //   return this.users;
  // }

  // getUser(userDetails: any) {
  //   return this.users.find(
  //     (u) => u.username == userDetails.username && u.password == userDetails.password);
  // }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(credentials: { username: string; password: string; id: number }): User | null {
    // דמו בלבד — jsonplaceholder 
    const mockUser: User = {
      username: credentials.username,
      password: credentials.username + '1234',
      userRole: credentials.id % 2 === 0 ? UserRole.GYMTEACHER : UserRole.SECRETARY
    };
    return mockUser;
  }
}
