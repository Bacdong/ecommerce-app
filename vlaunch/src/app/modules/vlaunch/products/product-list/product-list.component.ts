import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import {Product} from '../../../../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  rootPath = 'products';
  products: Product[] = [];
  subscription = new Subscription();
  p: string | number = 1;
  private options = {
    totalPerPage: 100, bookName: undefined,
    categoryId: undefined,
    sortByTimeAsc: undefined,
    sortByPriceAsc: undefined,
    sortByPriceDesc: undefined

  };

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // let page;
    //
    // this.subscription.add(
    //   this.route.queryParams.subscribe((params) => {
    //     page = params.page;
    //   })
    // );
    //
    // if (page) {
    //   this.productsService.getProducts({ page });
    // } else {
    //   this.productsService.getProducts();
    // }
    // this.subscription.add(
    //   this.productsService.products$.subscribe((products) => {
    //     this.products = products;
    //   })
    // );
    this.activatedRoute.queryParams.subscribe(query => {
      if (query.keyword){
        console.log(query);
        this.options.bookName = query.keyword;
      }
      if (query.category){
        this.options.categoryId = query.category;
      }
      if (query.sort){
        switch (query.sort){
          case 'new': {
            this.options.sortByTimeAsc = 'string';
            break;
          }
          case 'increase': {
            this.options.sortByPriceAsc = 'string';
            break;
          }
          case 'decrease': {
            this.options.sortByPriceDesc = 'string';
            break;
          }
        }
      }
     },
      error => {

      },
      () => {
        this.productsService.getAllProduct(this.options);
      }
      );
    this.productsService.getAllProduct(this.options);
    this.productsService.products$.subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }

  private removeVietnameseTones(str: string): string {
    str = str.replace(/[??????????????????????????????????????????????]/g, 'a');
    str = str.replace(/[??????????????????????????????]/g, 'e');
    str = str.replace(/[????????????]/g, 'i');
    str = str.replace(/[??????????????????????????????????????????????]/g, 'o');
    str = str.replace(/[?????????????????????????????]/g, 'u');
    str = str.replace(/[??????????????]/g, 'y');
    str = str.replace(/??/g, 'd');
    str = str.replace(/[??????????????????????????????????????????????]/g, 'A');
    str = str.replace(/[??????????????????????????????]/g, 'E');
    str = str.replace(/[????????????]/g, 'I');
    str = str.replace(/[??????????????????????????????????????????????]/g, 'O');
    str = str.replace(/[?????????????????????????????]/g, 'U');
    str = str.replace(/[??????????????]/g, 'Y');
    str = str.replace(/??/g, 'D');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
    str = str.replace(/[\u0300\u0301\u0303\u0309\u0323]/g, ''); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
    str = str.replace(/[\u02C6\u0306\u031B]/g, ''); // ?? ?? ??  ??, ??, ??, ??, ??
    // Remove extra spaces
    // B??? c??c kho???ng tr???ng li???n nhau
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    // Remove punctuations
    // B??? d???u c??u, k?? t??? ?????c bi???t
    str = str.replace(/[!@%^*()+=<>?\/,.:;'"&#\[\]~$_`\-{}|\\]/g, ' ');
    return str;
  }

  changePage(page): any {
    this.productsService.getProducts({ page });
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
