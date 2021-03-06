import { Component, HostListener, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';
import { LANGUAGES } from './language';
import { NAVIGATIONS } from './navigation';
import { SUBMENUS } from './submenu';
import {TokenService} from '../../../core/services/token.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductsService} from '../../../modules/vlaunch/products/products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isDisplay = false;
  screenWidth: number;

  navigations = NAVIGATIONS;
  languages = LANGUAGES;
  submenu = SUBMENUS;

  currentCity: string;
  cityList = [
    'ho chi minh',
    'da nang',
    'ha noi',
    'vinh',
    'da lat'
  ];
  private queryParam: Params | null = {};
  private options: any = {
    totalPerPage: 100, bookName: undefined,
    categoryId: undefined,
    sortByTimeAsc: undefined,
    sortByPriceAsc: undefined,
    sortByPriceDesc: undefined
  };

  constructor(public tokenService: TokenService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.cityListSlide();
    this.activatedRoute.queryParams.subscribe(res => {
      if (res.category){
        this.queryParam.category = res.category;
        this.options.categoryId = res.category;
      }
      if (res.sort){
        this.queryParam.sort = res.sort;
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
      }}
      if (res.keyword){
        this.queryParam.keyword = res.keyword;
        this.options.bookName = res.keword;
      }
    });
  }

  showSearch(): any {
    document.getElementById('search').classList.add('show');
    document.getElementById('action-menu').style.opacity = '0';
  }

  closeSearch(): any {
    document.getElementById('search').classList.remove('show');
    document.getElementById('action-menu').style.opacity = '1';
  }

  toggleDisplay(): any{
    this.isDisplay = !this.isDisplay;
    if (this.isDisplay) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'unset';
    }
  }

  cityListSlide(): any{
    let index = 0;
    this.currentCity = this.cityList[index];
    setInterval(() => {
      this.currentCity = this.cityList[index];
      index++;
      if (index === this.cityList.length) { index = 0; }
    }, 3000);
  }

  logout(): any {
    this.tokenService.clear();
  }

  search(value: string): any {
    this.queryParam.keyword = value;
    this.router.navigate(['products'], {queryParams: this.queryParam}).then(r => {
      this.options.bookName = value;
      console.log(this.options);
      this.productsService.getProductsByOptions(this.options);
    });
  }
}
