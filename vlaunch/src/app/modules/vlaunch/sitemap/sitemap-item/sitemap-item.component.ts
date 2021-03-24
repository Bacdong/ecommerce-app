import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap-item',
  templateUrl: './sitemap-item.component.html',
  styleUrls: ['./sitemap-item.component.scss']
})
export class SitemapItemComponent implements OnInit {
  @Input() sitemapItem;
  constructor() { }

  ngOnInit(): void {
  }

}
