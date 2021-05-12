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
@Pipe({ name: 'orderStatus' })
export class OrderStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value){
      case 1: return 'Đang xử lý';
      case 2: return 'Đã giao hàng';
      case 3: return 'Đã hủy đơn hàng';
    }
  }
}
@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
    return value.split(':')[0];
    }
  }
}
@Pipe({ name: 'paymentMethod' })
export class PaymentMethodPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value){
      return 'Thanh toán bằng Stripe';
    }else {
      return 'Thanh toán khi giao hàng';
    }
  }
}
