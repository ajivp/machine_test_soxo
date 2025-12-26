import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  private users$ = new BehaviorSubject<User[]>([
    { id: 1, name: 'John', email: 'john@mail.com', username: 'john01' },
    { id: 2, name: 'Sarah', email: 'sarah@mail.com', username: 'sarah02' },
    { id: 3, name: 'Alex', email: 'alex@mail.com', username: 'alex03' }
  ]);

  getUsers() {
    return this.users$.asObservable();
  }

  addUser(user: User) {
    const users = this.users$.value;
    const nextId = users.length
      ? Math.max(...users.map(u => u.id)) + 1
      : 1;

    this.users$.next([...users, { ...user, id: nextId }]);
  }

  updateUser(user: User) {
    this.users$.next(
      this.users$.value.map(u => u.id === user.id ? user : u)
    );
  }

  deleteUser(id: number) {
    this.users$.next(this.users$.value.filter(u => u.id !== id));
  }
}
