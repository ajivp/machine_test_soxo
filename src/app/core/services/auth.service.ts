import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {}

  login(data: { username: string; password: string }) {
    if (data.username && data.password) {
      // mock success
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}

