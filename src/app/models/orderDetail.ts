import { Product } from './product';
import { Quantity } from './quantity';
import { Price } from './price';

export interface OrderDetail {
  id: number;
  product: Product;
  quantity: Quantity;
  price: Price;
}
