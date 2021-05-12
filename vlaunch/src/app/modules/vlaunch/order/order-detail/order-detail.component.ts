import { Component, OnInit } from '@angular/core';
import {OrderDetail} from '../../../../models/order-detail';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';
import {Result} from '../../../../models/result';
import {environment} from '../../../../../environments/environment';
import {stringToSlug} from '../../../../core/utils';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderDetail: OrderDetail = new OrderDetail();
  orderDetailList: OrderDetail[] = [];
  private id = '0';
  imgPath = environment.IMAGE_PATH;

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderService.getInvoiceDetail(this.id).subscribe((res: Result) => {
      this.orderDetailList = res.data;
      this.orderDetail = this.orderDetailList[0];
      console.log(this.orderDetail);
    });
  }

  getTotal(): any {
    let sum = 0;
    this.orderDetailList.forEach(x => {
      sum += x.book.price;
    });
    return sum;
  }

  convertToSlug(bookName: string): any {
    console.log(stringToSlug(bookName));
    return stringToSlug(bookName);
  }
}
