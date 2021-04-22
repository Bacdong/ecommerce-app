import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: OrderService,
    private router: Router,
    private alertService: AlertService,
    private location: Location
  ) {}

  subscribe = new Subscription();
  code;
  product;
  lineID;
  ratingValue;
  textValue = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id && parseInt(id)) {
        this.lineID = id;
      } else {
        this.router.navigate(['404']);
      }
      let code = params.get('code');
      if (code) {
        this.code = code;
        this.service.getOrderDetail(code);
      }
    });

    this.subscribe.add(
      this.service.orderDetail$.pipe(take(1)).subscribe((arg) => {
        if (arg && this.lineID) {
          let index = arg['lines'].findIndex((e) => e.id == this.lineID);
          this.product = arg['lines'][index];
          if(this.product.has_rating) {
            this.alertService.successAlert('Sản phẫm đã được đánh giá');
            this.location.back();
          }
        }
      })
    );
  }

  ratingProduct() {
    var data = {
      rating: this.ratingValue | 0,
      reason: this.textValue,
    };

    this.service.rating(this.code, this.lineID, data);
  }
}
