import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CartService} from './cart.service';
import {Book, Cart} from '../../../models/cart';
import {stringToSlug} from '../../../core/utils';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  carts: any;
  env = environment;
  listCart: Cart[] = [
    new Cart()
  ];
  constructor(private cartService: CartService) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.cartService.getAllCartByUserId();
    this.cartService.$cart.subscribe(res => {
      this.listCart = res;
      console.log(this.listCart);
    });
  }

  deleteCartLine(): void {

  }

  sumCart(): number{

    let sum = 0;
    this.listCart.forEach(item => {
      sum += item.amount;
    });
    return sum;
  }

  stringToSlug(bookName: string): string {
    return bookName ? stringToSlug(bookName) : '';
  }

  priceSum(): number {
    let sum = 0;
    this.listCart.forEach(x => {
      sum += x.amount * x.book.price;
    });
    return sum;
  }

  decreaseQuantity(id: number, value: string) {

  }

  increaseQuantity(id: number, value: string) {

  }

  changeQuantity(id: number, value: string) {
    console.log(value);
  }
}
