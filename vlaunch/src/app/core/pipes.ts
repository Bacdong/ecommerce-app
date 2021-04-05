import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatPrice' })
export class FormatPricePipe implements PipeTransform {
  transform(value): string {
    value = value?.toString().replace(/[\,]+/g, '');
    value = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return value;
  }
}
