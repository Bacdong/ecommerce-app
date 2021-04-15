import { Component, Input, OnInit } from '@angular/core';
import { stringToSlug } from 'src/app/core/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  path = environment.IMAGE_PATH;
  slug: string;
  constructor() { }

  ngOnInit(): void {
    if (this.product.bookName){
      this.slug = stringToSlug(this.product.bookName);
    }
  }
}
