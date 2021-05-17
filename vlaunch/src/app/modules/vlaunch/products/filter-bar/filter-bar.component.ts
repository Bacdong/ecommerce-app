import { Component, OnInit } from '@angular/core';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Product} from '../../../../models/product';
import {ProductsService} from '../products.service';
import {Category} from '../../../../models/category';
import {$e} from 'codelyzer/angular/styles/chars';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {query} from '@angular/animations';
import {toNumber} from 'ng-zorro-antd/core/util';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  path = 'store';
  sortby = [
    { value: 'new', name: 'Mới nhất' },
    { value: 'increase', name: 'Giá tăng dần' },
    { value: 'decrease', name: 'Giá giảm dần' },
  ];
  private options = {
    totalPerPage: 100,
    sortByTimeAsc: undefined,
    sortByPriceAsc: undefined,
    sortByPriceDesc: undefined,
    categoryId: undefined,
    bookName: undefined

  };
  categories: Category[] = [];
  private queryParam: Params | null = {

  };
  selectedCategory = 11;
  formatLabel(value: number): any{
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  constructor(public productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    this.productsService.getAllCategory().subscribe(res => {
      this.categories = res.data;
      console.log(res.data);
    });
    this.activatedRoute.queryParams.subscribe(res => {
      if (res.keyword){
        this.options.bookName = res.keyword;
        this.queryParam.keyword = res.keyword;
      }
      if (res.category){
        this.options.categoryId = res.category;
        this.queryParam.category = res.category;
        this.selectedCategory = res.category;
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

  sortBy(value: any): any{
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
}
export enum Sort{
  default,
  new,
  increase,
  decrease
}
