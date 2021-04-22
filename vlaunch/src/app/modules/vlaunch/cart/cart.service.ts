import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {TokenService} from '../../../core/services/token.service';
import {Cart} from '../../../models/cart';
import * as url from 'url';
import {Result} from '../../../models/result';
import {SnackbarService} from '../../../core/services/snackbar.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarModifyService} from '../../../core/services/snackbar-modify.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new BehaviorSubject(new Array(new Cart()));
  $cart = this.cartSubject.asObservable();
  constructor(private httpService: HttpService, private tokenService: TokenService, private snackbarModifyService: SnackbarModifyService) { }

  getAllCartByUserId(): void {
    this.getAllApiCartByUserId().subscribe(res => {
      this.cartSubject.next(res.data);
    });
  }

  private getAllApiCartByUserId(): Observable<any> {
    const url = 'Cart/' + this.tokenService.getUserId();
    return this.httpService.getHandle(url);
  }

  addCart(data: { amount: number; userId: string; bookId: any }): any{
    this.postCart(data).subscribe((res: Result) => {
      if (res.success){
        this.cartSubject.next(res.data);
      }
      this.snackbarModifyService.openMessage(res, 'Da them san pham vao gio hang');
    });
  }

  private postCart(data: { amount: number; userId: string; bookId: any }): Observable<any> {
    const url = 'Cart/';
    return this.httpService.postHandle(url, data);
  }

  deleteCartById(id: number): any {
    const url = 'Cart/DeleteById/' + id;
    this.httpService.deleteHandle(url).subscribe((res: Result) => {
        if (res.success){
          this.cartSubject.next(res.data);
        }
    });
  }

  updateCart(id: number, value: string): any {
    const path = 'Cart';
    const data = {
      id,
      amount: value
    };
    this.httpService.putHandle(path, data).subscribe((res: Result) => {
      if (res.success){
        this.cartSubject.next(res.data);
      }else {
        this.snackbarModifyService.openMessage(res);
      }
    });
  }
}
