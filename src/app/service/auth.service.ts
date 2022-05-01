import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(): void {
    localStorage.setItem('token', "token");
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
