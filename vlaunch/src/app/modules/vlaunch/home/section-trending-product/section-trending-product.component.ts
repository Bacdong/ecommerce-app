import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-section-trending-product',
  templateUrl: './section-trending-product.component.html',
  styleUrls: ['./section-trending-product.component.scss']
})
export class SectionTrendingProductComponent implements OnInit, OnDestroy {
  constructor(private homeService: HomeService) { }

  trendingProducts: any;
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
