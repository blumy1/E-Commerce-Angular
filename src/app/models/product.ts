import { Price } from './price';
import { Quantity } from './quantity';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: Price;
  quantity: Quantity;
  rating: number;
  createdAt: Date;
}
