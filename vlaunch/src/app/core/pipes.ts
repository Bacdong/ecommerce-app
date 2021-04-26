import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../environments/environment';

@Pipe({ name: 'formatPrice' })
export class FormatPricePipe implements PipeTransform {
  transform(value): string {
    value = value?.toString().replace(/[,]+/g, '');
    value = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return value;
  }
}
@Pipe({ name: 'defaultImage' })
export class DefaultImagePipe implements PipeTransform {
  transform(value, type): string {
    if (value && value !== '') { return environment.IMAGE_PATH + value; }
    // if (value && value !== '') { return value; }
    return type === 'article'
      ? 'assets/images/420x320.png'
      : type === 'slider'
        ? 'assets/images/slider_1.jpg'
        : type === 'banner'
          ? 'assets/images/cate-1-banner.jpg'
          : type === 'user'
            ? 'assets/images/64x64.png'
            : 'assets/images/placeholder-img.png';
  }
}
