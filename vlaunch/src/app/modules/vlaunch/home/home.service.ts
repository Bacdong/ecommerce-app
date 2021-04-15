import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import {SnackbarService} from '../../../core/services/snackbar.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Result} from '../../../models/result';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpService, private snackbarService: SnackbarService, private matSnackBar: MatSnackBar) { }

  $products = new BehaviorSubject(new Array(new Product()));

  init(): any{
    this.getTrendingProducts();
  }
  getTrendingProducts(): any {
    const url = 'Books/SearchBook';
    const data = { totalPerPage: environment.LIMIT_TRENDING_PRODUCTS };

    this.http.postHandle(url, data).subscribe((res: Result) => {
      if (res && res.success) {
        // console.log(res.data.data);
        // @ts-ignore
        this.$products.next(res.data.data);
      } else {
        this.matSnackBar.open(res.error_message, 'Close', {
          duration: 2000
        });
      }
    });
  }
}
