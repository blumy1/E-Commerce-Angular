import { User } from './user';
import { OrderDetail } from './orderDetail';

export interface Order {
  id: number;
  orderedAt: Date;
  user: User;
  orderDetails: OrderDetail[];
}
