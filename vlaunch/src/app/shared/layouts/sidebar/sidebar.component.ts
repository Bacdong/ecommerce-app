import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {ProductsService} from '../../../modules/vlaunch/products/products.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categoryList: Category[] = [];
  private options: any = {
    totalPerPage: 100,
    sortByTimeAsc: undefined,
    sortByPriceAsc: undefined,
    sortByPriceDesc: undefined,
    categoryId: undefined,
    bookName: undefined
  };
  sortby = [
    { value: 'new', name: 'Mới nhất' },
    { value: 'increase', name: 'Giá tăng dần' },
    { value: 'decrease', name: 'Giá giảm dần' },
  ];
  private queryParam: Params | null = {

  };

  constructor(private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(res => {
      if (res.keyword){
        this.options.bookName = res.keyword;
        this.queryParam.keyword = res.keyword;
      }
      if (res.category){
        this.options.categoryId = res.category;
        this.queryParam.category = res.category;
      }
      if (res.sort){
        switch (res.sort){
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
    });
  }

  ngOnInit(): void {
    this.productsService.getAllCategory().subscribe(res => {
      this.categoryList = res.data;
    });
  }

  changeCategory($event: any): any {
    if ($event === '0'){
      this.options.categoryId = undefined;
    }else {
      this.options.categoryId = $event;
    }
    this.queryParam.category = $event;
    this.router.navigate(['/products'], {queryParams: this.queryParam}).then(r => {
      this.productsService.getProductsByOptions(this.options);
    });
    console.log(this.options);
  }

  sortBy(value: any): any {
    this.options.sortByPriceDesc = undefined;
    this.options.sortByTimeAsc = undefined;
    this.options.sortByPriceAsc = undefined;
    if (value === 'new'){
      this.options.sortByTimeAsc = 'string';
    }
    if (value === 'increase'){
      this.options.sortByPriceAsc = 'string';
    }
    if (value === 'decrease'){
      this.options.sortByPriceDesc = 'string';
    }
    this.queryParam.sort = value;
    this.router.navigate(['/products'], {queryParams: this.queryParam}).then(r => {
      this.productsService.getProductsByOptions(this.options);
    });
    console.log(this.options);

  }

  minPrice(value: any) {
    console.log(value);
  }
}
