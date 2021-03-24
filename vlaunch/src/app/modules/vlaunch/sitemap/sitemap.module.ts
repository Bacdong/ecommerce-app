import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitemapComponent } from './sitemap.component';
import { ShareModule } from '../share.module';
import { SitemapListComponent } from './sitemap-list/sitemap-list.component';
import { SitemapItemComponent } from './sitemap-item/sitemap-item.component';



@NgModule({
  declarations: [
    SitemapComponent, 
    SitemapListComponent, 
    SitemapItemComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
  ]
})
export class SitemapModule { }
