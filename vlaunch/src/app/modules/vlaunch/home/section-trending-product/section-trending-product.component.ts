import { Component, OnInit } from '@angular/core';
import { TRENDING_PRODUCTS } from './trending-product';

@Component({
  selector: 'app-section-trending-product',
  templateUrl: './section-trending-product.component.html',
  styleUrls: ['./section-trending-product.component.scss']
})
export class SectionTrendingProductComponent implements OnInit {
  products = TRENDING_PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
