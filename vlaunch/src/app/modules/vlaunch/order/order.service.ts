import { Injectable } from '@angular/core';
import {TokenService} from '../../../core/services/token.service';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Invoice} from '../../../models/invoice';
import {Result} from '../../../models/result';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  invoiceSubject = new BehaviorSubject(new Array(new Invoice()));
  $invoice = this.invoiceSubject.asObservable();
  constructor(private tokenService: TokenService, private httpService: HttpService) { }

  getInvoideByUserId(): any{
    const url = 'Invoice/GetInvoiceByUserId/' + this.tokenService.getUserId();
    return this.httpService.getHandle(url).subscribe((res: Result) => {
      this.invoiceSubject.next(res.data);
    });
  }
}
