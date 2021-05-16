import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CartService} from './cart.service';
import {Book, Cart} from '../../../models/cart';
import {stringToSlug} from '../../../core/utils';
import {environment} from '../../../../environments/environment';
import {TokenService} from '../../../core/services/token.service';
import {SnackbarModifyService} from '../../../core/services/snackbar-modify.service';
import {Result} from '../../../models/result';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  carts: any;
  amountUpdate = AmountUpdate;
  env = environment;
  listCart: Cart[] = [
    new Cart()
  ];
  constructor(private cartService: CartService, public tokenService : TokenService, private snackbarModifyService: SnackbarModifyService) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.cartService.getAllCartByUserId();
    this.cartService.$cart.subscribe(res => {
      this.listCart = res;
      console.log(this.listCart);
    });
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

  deleteCartLine(id: number): any{
    this.cartService.deleteCartById(id);
  }

  changeQuantity(id: number, value: string): any {
    if (Number(value) <= 0 || value === undefined) {
      this.deleteCartLine(id);
    }
    this.cartService.updateCart(id, value);
  }

  decreaseAmount(id: number): any {
    const input = document.querySelector('#amount-quantity-' + id) as HTMLInputElement;
    input.value = String(Number(input.value) - 1);
    this.changeQuantity(id, input.value);
  }

  increaseAmount(id: number): any {
    const input = document.querySelector('#amount-quantity-' + id) as HTMLInputElement;
    input.value = String(Number(input.value) + 1);
    this.changeQuantity(id, input.value);
  }

  checkLogin(): any{
    if (!this.tokenService.getUserId()){
      this.snackbarModifyService.openMessage({data: '', success : false, error_message: 'Vui lòng đăng nhập trước khi mua hàng'}, );
    }
  }
}
export enum AmountUpdate{
  increase,
  decrease,
  change,
}
