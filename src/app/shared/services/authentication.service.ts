import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shopping-cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) { }

  private apiUrl = 'http://localhost:8080';

  authenticate(email, password) {
    this.http.post<number>(this.apiUrl + '/login', {email, password}).subscribe(response => {
      if (response > 0) {
        sessionStorage.setItem('user_id', response.toString());
        this.router.navigate(['']);
      }
    });
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('user_id');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('user_id');
    localStorage.clear();
    this.cartService.deleteAllProducts();
  }
}
