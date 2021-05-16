import { Component, OnInit } from '@angular/core';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Product} from '../../../../models/product';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  path = 'store';
  sortby = [
    { value: 'default', name: 'Mặc định' },
    { value: 'new', name: 'Mới nhất' },
    { value: 'increase', name: 'Giá tăng dần' },
    { value: 'decrease', name: 'Giá giảm dần' },
  ];
  private options = {
    totalPerPage: 8,
    currentPage: 0, sortByTimeAsc: undefined

  };

  constructor(public productsService: ProductsService) {  }

  ngOnInit(): void {
  }

  sortBy(value: any): any{
    if (value === 'new'){
      this.options.sortByTimeAsc = 'string';
      this.productsService.getProductsByOptions(this.options);
    }
  }
}
export enum Sort{
  default,
  new,
  increase,
  decrease
}
