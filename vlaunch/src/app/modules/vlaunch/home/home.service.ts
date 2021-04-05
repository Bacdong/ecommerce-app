import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpService) { }

  $products = new Subject<Product>();

  init(): any{
    this.getTrendingProducts();
  }
  getTrendingProducts(): any {
    const url = 'Books/SearchBook';
    const data = { totalPerPage: environment.LIMIT_TRENDING_PRODUCTS };

    this.http.postHandle(url, data).subscribe((res) => {
      if (res && res.success) {
        console.log(res.data.data);
        this.$products.next(res.data);
      } else {
        console.log(res.error_code);
      }
    });
  }
}
