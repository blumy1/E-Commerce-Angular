import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new Array();

  constructor() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  addProduct(product: Product) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteProduct(product: Product) {
    this.cart.splice(this.cart.indexOf(product), 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getProducts() {
    return this.cart;
  }

  checkout() {
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart');
    }
  }
}
