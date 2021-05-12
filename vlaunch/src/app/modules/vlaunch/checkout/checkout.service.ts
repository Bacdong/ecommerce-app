import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpService: HttpService) { }

  createOrder(data: any): Observable<any> {
    const url = 'Invoice';
    return this.httpService.postHandle(url, data);
  }

  createOrderDetail(invoiceDetail: {}[]): Observable<any> {
    const url = 'InvoiceDetail';
    return this.httpService.postHandle(url, invoiceDetail);
  }
}
