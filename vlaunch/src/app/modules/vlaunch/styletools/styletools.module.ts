import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyletoolsComponent } from './styletools.component';
import { ShareModule } from '../share.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { VlaunchRoutingModule } from '../vlaunch-routing.module';
import { SectionIntroductionComponent } from './section-introduction/section-introduction.component';
import { SectionStyletoolItemComponent } from './section-styletool-item/section-styletool-item.component';



@NgModule({
  declarations: [
    StyletoolsComponent,
    SectionIntroductionComponent,
    SectionStyletoolItemComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatIconModule,
    RouterModule,
    VlaunchRoutingModule,
  ]
})
export class StyletoolsModule { }
