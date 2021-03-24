import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-banner-item',
  templateUrl: './category-banner-item.component.html',
  styleUrls: ['./category-banner-item.component.scss']
})
export class CategoryBannerItemComponent implements OnInit {
  @Input() item;
  @Input() index;
  constructor() { }

  currentItemName: string;
  currentImage;
  currentTimeChange: number = 1000;

  ngOnInit(): void {
    this.currentItemName = this.item['name'];
    let idx = 0;
    let length = this.item.images.length;
    let ms = this.currentTimeChange * (this.index + 1);

    this.currentImage = this.item.images[idx];
    setInterval(() => {
      this.currentImage = this.item.images[idx];
      idx++;
      if (idx == length) { idx = 0; }
    }, ms);
  }
}
