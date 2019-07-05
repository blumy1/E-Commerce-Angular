import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from './services/cart.service';
import { Location } from '@angular/common';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartContent: Product[];
  total = 0;

  constructor(public cartService: CartService, private location: Location, private ordersService: OrdersService) { }

  ngOnInit() {
    this.cartContent = this.cartService.getProducts();
    this.cartContent.forEach(product => {
      this.total += product.price.amount;
    });
  }

  removeProduct(product: Product) {
    this.total -= product.price.amount;
    this.cartService.deleteProduct(product);
  }

  checkout() {
    this.ordersService.addOrder(this.cartContent);
    this.cartService.checkout();
    this.cartContent = [];
    this.total = 0;
  }

  back() {
    this.location.back();
  }

}
