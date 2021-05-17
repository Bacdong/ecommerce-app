import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { VlaunchRoutingModule } from '../vlaunch-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ShareModule } from '../share.module';
import { MatSelectModule } from '@angular/material/select';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MaterialModule} from '../material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {SidebarComponent} from '../../../shared/layouts/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    FilterBarComponent,
    ProductDetailComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        ShareModule,
        MatIconModule,
        MatSelectModule,
        CarouselModule,
        RouterModule,
        VlaunchRoutingModule,
        MaterialModule,
        NgxPaginationModule,
    ]
})
export class ProductsModule { }
