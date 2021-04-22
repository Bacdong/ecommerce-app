import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpService, private alertService: AlertService) {}

  orders$ = new Subject();
  orderDetail$ = new Subject();

  public getOrderList(page?: number) {
    // let url = 'order';
    // if (page) {
    //   url = url + '?page=' + page;
    // }
    //
    // this.http.get(url).subscribe((res) => {
    //   if (res && res.success) {
    //     this.orders$.next(res.data);
    //   } else {
    //     this.alertService.errorAlert(res);
    //   }
    // });
  }

  public getOrderDetail(code: string) {
    // const url = 'order/' + code;
    // this.http.get(url).subscribe((res) => {
    //   if (res && res.success) {
    //     this.orderDetail$.next(res.data);
    //   } else {
    //     this.alertService.errorAlert(res);
    //   }
    // });
  }

  public rating(code: string, id: any, data: any) {
    // const url = `order/${code}/line/${id}/rating`;
    // this.http.post(url, data).subscribe((res) => {
    //   if (res && res.success) {
    //     this.alertService.successAlert('Gửi đánh giá thành công');
    //   } else {
    //     this.alertService.errorAlert(res);
    //   }
    // });
  }
}
