import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Params } from 'src/app/core/http-params';
import { HttpService } from 'src/app/core/services/http.service';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import {SnackbarModifyService} from 'src/app/core/services/snackbar-modify.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product$ = new Subject<Product>();
  products$ = new Subject<Product>();
  constructor(
    private http: HttpService,
    private router: Router,
    private snackbarModifyService: SnackbarModifyService
  ) { }

  getProducts(params?: Params): any {
    const url = 'Books/SearchBook';
    const data = {
      limit: undefined,
      page: undefined
    };

    if (params) {
      const limit = params.limit ? params.limit : environment.PRODUCTS_LIMIT;
      const page = params.page ? params.page : 1;

      data.limit = limit;
      data.page = page;
    } else {
      data.limit = environment.PRODUCTS_LIMIT;
      data.page = 1;
    }

    this.http.postHandle(url, data).subscribe((res) => {
      if (res && res.success) {
        this.products$.next(res.data);
      } else {
        // this.snackbarService.errorMessage(res);
        this.snackbarModifyService.openMessage(res);
      }
    });
  }

  getProductDetail(id): any {
    const url = 'Books/' + id;

    this.http.getHandle(url).subscribe((res) => {
      if (res && res.success) {
        this.product$.next(res.data);
      } else {
        if (res.error_message) {
          this.router.navigate(['/404']);
        }
        this.snackbarModifyService.openMessage(res);
      }
    });
  }

  getProductsByOptions(options: { sortByTimeAsc: undefined; totalPerPage: number; currentPage: number }): any{
    const url = 'Books/SearchBook';
    this.http.postHandle(url, options).subscribe(res => {
      if (res && res.success) {
        this.products$.next(res.data);
        console.log(res);
      }
    });
  }

  getAllCategory(): any {
    const url = 'Category/GetAllCategories';
    return this.http.getHandle(url);
  }
}
