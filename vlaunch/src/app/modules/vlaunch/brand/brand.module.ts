import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { SectionQuoteComponent } from './section-quote/section-quote.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SectionHowItsWorkComponent } from './section-how-its-work/section-how-its-work.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    BrandComponent, 
    SectionQuoteComponent, 
    SectionHowItsWorkComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatIconModule,
  ]
})
export class BrandModule { }
