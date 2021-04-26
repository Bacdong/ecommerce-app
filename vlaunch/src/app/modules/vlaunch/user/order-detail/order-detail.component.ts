import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private service: OrderService) {}

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  orderDetail;
  subscribe = new Subscription();

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let code = params.get('code');
      if (code) {
        this.service.getOrderDetail(code);
      }
    });

    this.subscribe.add(
      this.service.orderDetail$
        .pipe(take(1))
        .subscribe((arg) => (this.orderDetail = arg))
    );
  }
}
