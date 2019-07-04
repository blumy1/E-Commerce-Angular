import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
    console.log(this.products);
   }

  ngOnInit() {
  }

}
