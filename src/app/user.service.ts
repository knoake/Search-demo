import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    { name: 'katie', id: '123' },
    { name: 'lucy', id: '432' },
    { name: 'james', id: '678' },
  ];
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  constructor() {}
}
