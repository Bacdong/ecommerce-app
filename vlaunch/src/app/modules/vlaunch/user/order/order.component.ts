import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(public orderService: OrderService) {}

  ordersData;
  subscription = new Subscription();

  ngOnInit(): void {
    this.orderService.getOrderList();

    this.subscription.add(
      this.orderService.orders$.subscribe((arg) => (this.ordersData = arg))
    );
  }

  changePage(page) {
    this.orderService.getOrderList(page);
  }
}
