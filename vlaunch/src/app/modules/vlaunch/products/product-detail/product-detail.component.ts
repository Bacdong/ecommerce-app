import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  models = [
    { value: "60-0449", name: "W454 X D253 X H80 CM" },
    { value: "60-0450", name: "W390 X D171 X H80 CM" },
    { value: "60-0530", name: "W554 X D145 X H90 CM" },
    { value: "60-0532", name: "W390 X D171 X H90 CM" },
  ];

  selectedModel = this.models[0].value;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      940: { items: 1 }
    },
    nav: false
  }
}
