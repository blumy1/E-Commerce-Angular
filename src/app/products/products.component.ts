import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
    console.log(this.products);
   }

  ngOnInit() {
  }

}
