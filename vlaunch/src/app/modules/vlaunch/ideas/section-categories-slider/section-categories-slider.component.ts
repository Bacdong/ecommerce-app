import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CATEGORIES_SLIDE } from './categories';

@Component({
  selector: 'app-section-categories-slider',
  templateUrl: './section-categories-slider.component.html',
  styleUrls: ['./section-categories-slider.component.scss']
})
export class SectionCategoriesSliderComponent implements OnInit {
  categories = CATEGORIES_SLIDE;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 15,
    navText: ['&lsaquo;', '&rsaquo;'],
    responsive: {
      0: { items: 2, },
      300: { items: 3, },
      650: { items: 5, },
      800: { items: 8, },
    },
    nav: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
