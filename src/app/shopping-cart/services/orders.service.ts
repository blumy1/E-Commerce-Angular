import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
import { OrderDetail } from 'src/app/models/orderDetail';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private loginService: AuthenticationService, private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/orders';

  addOrder(products: Product[]) {
    if (!this.loginService.isUserLoggedIn()) {
      return;
    }


    const id = +sessionStorage.getItem('user_id');
    const order = {} as Order;
    order.orderDetails = new Array();
    products.forEach(product => {
      const orderDetail = {} as OrderDetail;
      orderDetail.product = product;
      orderDetail.price = product.price;
      orderDetail.quantity = product.quantity;
      order.orderDetails.push(orderDetail);
    });

    const user = {} as User;
    user.id = id;
    order.user = user;

    console.log(order);
    this.http.post<Order>(this.apiUrl, order).subscribe(response => console.log(response));
  }
}
