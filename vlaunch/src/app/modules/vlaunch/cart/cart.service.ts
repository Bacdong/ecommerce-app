import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {TokenService} from '../../../core/services/token.service';
import {Cart} from '../../../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new BehaviorSubject(new Array(new Cart()));
  $cart = this.cartSubject.asObservable();
  constructor(private httpService: HttpService, private tokenService: TokenService) { }

  getAllCartByUserId(): void {
    this.getAllApiCartByUserId().subscribe(res => {
      this.cartSubject.next(res.data);
    });
  }

  private getAllApiCartByUserId(): Observable<any> {
    const url = 'Cart/' + this.tokenService.getUserId();
    return this.httpService.getHandle(url);
  }
}
