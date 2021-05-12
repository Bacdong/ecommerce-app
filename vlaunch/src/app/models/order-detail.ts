import {Invoice} from './invoice';
import {Book} from './cart';

export class OrderDetail{
  'id': number;
  'quantity': number ;
  'subTotal': number;
  'invoiceId': number;
  'invoice': Invoice;
  'bookId': number;
  'book': Book;
}
