import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { CartService } from 'src/app/shopping-cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product$: Observable<Product>;
  private routeSub: Subscription;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, public loginService: AuthenticationService,
              private cartService: CartService) { }

  addToCart() {
    this.product$.subscribe(product => this.cartService.addProduct(product));
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params.id;
      this.product$ = this.productsService.getProduct(id);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
