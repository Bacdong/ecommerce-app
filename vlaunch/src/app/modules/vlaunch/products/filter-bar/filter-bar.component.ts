import { Component, OnInit } from '@angular/core';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Product} from '../../../../models/product';
import {ProductsService} from '../products.service';
import {Category} from '../../../../models/category';
import {$e} from 'codelyzer/angular/styles/chars';

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
    sortByPriceDesc: undefined

  };
  categories: Category[] = [];
  formatLabel(value: number): any{
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  constructor(public productsService: ProductsService) {  }

  ngOnInit(): void {
    this.productsService.getAllCategory().subscribe(res => {
      this.categories = res.data;
    });
  }

  sortBy(value: any): any{
    if (value === 'new'){
      this.options.sortByTimeAsc = 'string';
    }
    if (value === 'increase'){
      this.options.sortByPriceAsc = 'string';
    }
    if (value === 'decrease'){
      this.options.sortByPriceDesc = 'string';
    }
    this.productsService.getProductsByOptions(this.options);
  }

  changeCategory($event: any): any {
    console.log($event);
  }
}
export enum Sort{
  default,
  new,
  increase,
  decrease
}
