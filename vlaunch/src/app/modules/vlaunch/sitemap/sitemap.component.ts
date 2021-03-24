import { Component, OnInit } from '@angular/core';
import { SITEMAPS } from './sitemap';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
  title: string = 'sitemap';
  background: string = 'assets/images/backgrounds/sitemap-page/1.jpg';

  path: string = 'sitemap';
  sitemaps = SITEMAPS;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sitemaps);
    
  }

}
