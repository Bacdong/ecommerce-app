import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap-list',
  templateUrl: './sitemap-list.component.html',
  styleUrls: ['./sitemap-list.component.scss']
})
export class SitemapListComponent implements OnInit {
  @Input() sitemapList;
  constructor() { }

  ngOnInit(): void {
    console.log('sitemap-list: ', this.sitemapList);
    
  }

}
