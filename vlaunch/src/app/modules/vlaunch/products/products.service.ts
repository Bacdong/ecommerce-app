import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Params } from 'src/app/core/http-params';
import { HttpService } from 'src/app/core/services/http.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$ = new Subject<Product>();
  constructor(private http: HttpService, private snackbarService: SnackbarService) { }

  getProducts(params?: Params) {
    let url = 'Books/SearchBook';
    let data = {};
    
    if (params) {
      var limit = params.limit ? params.limit : environment.PRODUCTS_LIMIT;
      var page = params.page ? params.page : 1;

      data['limit'] = limit;
      data['page']= page;
    } else {
      data['limit'] = environment.PRODUCTS_LIMIT;
      data['page']= 1;
    }

    this.http.postHandle(url, data).subscribe((res) => {
      if (res && res.success) {
        this.products$.next(res.data);
      } else {
        this.snackbarService.errorMessage(res);
      }
    });
  }
}
