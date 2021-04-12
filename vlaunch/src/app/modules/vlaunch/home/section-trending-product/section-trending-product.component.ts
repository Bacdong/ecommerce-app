import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../home.service';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-section-trending-product',
  templateUrl: './section-trending-product.component.html',
  styleUrls: ['./section-trending-product.component.scss']
})
export class SectionTrendingProductComponent implements OnInit, OnDestroy {
  trendingProducts: Product[];
  constructor(private homeService: HomeService) { }

  subscription = new Subscription();
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.homeService.init();

    this.subscription.add(
      this.homeService.$products.subscribe((product) => {
        this.trendingProducts = product;
      })
    );
  }
}
