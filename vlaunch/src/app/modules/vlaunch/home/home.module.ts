import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SectionBannerComponent } from 'src/app/shared/components/section-banner/section-banner.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryBannerComponent } from './category-banner/category-banner.component';
import { CategoryBannerItemComponent } from './category-banner/category-banner-item/category-banner-item.component';
import { SectionStyletoolsComponent } from './section-styletools/section-styletools.component';
import { SectionTrendingProductComponent } from './section-trending-product/section-trending-product.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share.module';



@NgModule({
  declarations: [
    HomeComponent,
    SectionBannerComponent,
    CategoryBannerComponent,
    CategoryBannerItemComponent,
    SectionStyletoolsComponent,
    SectionTrendingProductComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatIconModule,
    CarouselModule,
    RouterModule,
  ]
})
export class HomeModule { }
