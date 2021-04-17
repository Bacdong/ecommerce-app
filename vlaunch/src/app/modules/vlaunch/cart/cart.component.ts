import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CartService} from './cart.service';
import {Cart} from '../../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  carts: any;
  private listCart: Cart[];
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

  updateQuantity(): any {

  }

  sumCart(): number {
    return this.listCart.reduce(()=>{
      
    });
  }
}
