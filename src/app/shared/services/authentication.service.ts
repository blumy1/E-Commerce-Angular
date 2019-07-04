import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = 'http://localhost:8080';

  authenticate(email, password) {
    this.http.post<boolean>(this.apiUrl + '/login', {email, password}).subscribe(response => {
      if (response) {
        sessionStorage.setItem('username', email);
        this.router.navigate(['']);
      }
    });
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
