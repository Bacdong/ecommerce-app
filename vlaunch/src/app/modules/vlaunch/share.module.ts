import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { GeneralBannerComponent } from 'src/app/shared/components/general-banner/general-banner.component';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    GeneralBannerComponent,
    FilterComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    IvyCarouselModule,
  ],
  exports: [
    ProductItemComponent,
    GeneralBannerComponent,
    FilterComponent,
    BreadcrumbComponent,
  ]
})
export class ShareModule { }
