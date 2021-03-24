import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import { SectionCategoriesSliderComponent } from './section-categories-slider/section-categories-slider.component';
import { ShareModule } from '../share.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SectionIdeaListComponent } from './section-idea-list/section-idea-list.component';
import { IdeaItemComponent } from './idea-item/idea-item.component';
import { VlaunchRoutingModule } from '../vlaunch-routing.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IdeasComponent, 
    SectionCategoriesSliderComponent, 
    SectionIdeaListComponent, 
    IdeaItemComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    CarouselModule,
    RouterModule,
    VlaunchRoutingModule,
    MatSelectModule,
    MatIconModule,
  ]
})
export class IdeasModule { }
