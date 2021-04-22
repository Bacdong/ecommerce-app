import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { HttpService } from 'src/app/core/services/http.service';
import { District, Province } from 'src/app/models/location';
import {TokenService} from '../../../core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AddressFormService {
  constructor(
    private http: HttpService,
    private alertService: AlertService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  provinces$ = new Subject<Province[]>();
  districts$ = new Subject<[District]>();
  address$ = new Subject();
  addresses$ = new BehaviorSubject(null);

  id: any;
  method = 'post';

  init(): any {
    this.getProvinces();

    if (this.method === 'put') {
      this.getAddressDetail();
    }
  }

  getProvinces(): any {
    const url = 'Address/GetCity';
    this.http.getHandle(url).subscribe((res) => {
      if (res && res.success) {
        this.provinces$.next(res.data);
      } else {
        this.alertService.errorAlert(res);
      }
    });
  }

  getDistrict(id): any {
    const url = 'Address/GetDistrict/' + id;
    this.http.getHandle(url).subscribe((res) => {
      if (res && res.success) {
        this.districts$.next(res.data);
      } else {
        this.alertService.errorAlert(res);
      }
    });
  }

  updateFormData(data): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.http.putHandle(url, data).subscribe((res) => {
      if (res && res.success){
       this.alertService.successAlert('Cập nhật địa chỉ thành công');
       this.router.navigate(['/user', 'address']);
      }else {
        this.alertService.errorAlert(res);
      }
    });
    // if (this.method === 'put') {
    //   url = url + '/' + this.id;
    //   this.http.put(url, data).subscribe((res) => {
    //     if (res && res.success) {
    //       this.alertService.successAlert('Cập nhật địa chỉ thành công.');
    //       this.router.navigate(['/user', 'address']);
    //     } else {
    //       this.alertService.errorAlert(res);
    //     }
    //   });
    // } else {
    //   this.http.post(url, data).subscribe((res) => {
    //     if (res && res.success) {
    //       this.alertService.successAlert('Cập nhật địa chỉ thành công.');
    //       this.router.navigate(['/user', 'address']);
    //     } else {
    //       this.alertService.errorAlert(res);
    //     }
    //   });
    // }
  }

  getAddressDetail(): any {
    const url = 'auth/address/' + this.id;
    this.http.get(url).subscribe((res) => {
      if (res && res.success) {
        this.address$.next(res.data);
      } else {
        this.alertService.errorAlert(res);
      }
    });
  }

  getAddresses(): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.http.get(url).subscribe((res) => {
      if (res && res.success) {
        console.log(res.data);
        this.addresses$.next(res.data);
      } else {
        this.alertService.errorAlert(res);
      }
    });
  }

  deleteAddress(id: number): any {
    const url = 'auth/address/' + id;
    this.http.delete(url).subscribe((res) => {
      if (res && res.success) {
        this.getAddresses();
      } else {
        this.alertService.errorAlert(res);
      }
    });
  }
}
