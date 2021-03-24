import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-banner',
  templateUrl: './section-banner.component.html',
  styleUrls: ['./section-banner.component.scss']
})
export class SectionBannerComponent implements OnInit {
  banners = [
    { src: 'assets/images/banners/1.jpg' },
    { src: 'assets/images/banners/2.jpg' },
    { src: 'assets/images/banners/3.png' },
    { src: 'assets/images/banners/4.jpg' },
    { src: 'assets/images/banners/5.jpg' },
    { src: 'assets/images/banners/6.jpg' },
    { src: 'assets/images/banners/7.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
