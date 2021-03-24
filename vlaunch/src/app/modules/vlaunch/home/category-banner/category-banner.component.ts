import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CATEGORY_BANNER_ITEMS } from './mock-category-banner-item';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss']
})
export class CategoryBannerComponent implements OnInit {
  categories = CATEGORY_BANNER_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 15,
    responsive: {
      0: {
        items: 2,
      },
      300: {
        items: 2,
      },
      650: {
        items: 4,
      },
      800: {
        items: 8,
      },
    },
    nav: false,
  };
}
