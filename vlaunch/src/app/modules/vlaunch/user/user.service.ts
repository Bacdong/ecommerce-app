import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {TokenService} from '../../../core/services/token.service';
import {Result} from '../../../models/result';
import {BehaviorSubject} from 'rxjs';
import {Address, City, District, User, Ward} from '../../../models/user';
import { SnackbarModifyService } from 'src/app/core/services/snackbar-modify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject(new User());
  $user = this.userSubject.asObservable();

  private citySubject = new BehaviorSubject(new Array(new City()));
  $city = this.citySubject.asObservable();

  private districtSubject = new BehaviorSubject(new Array(new District()));
  $district = this.districtSubject.asObservable();

  private wardSubject = new BehaviorSubject(new Array(new Ward()));
  $ward = this.wardSubject.asObservable();
  constructor(private httpService: HttpService, private tokenService: TokenService, private snackbarModifyService: SnackbarModifyService) { }

  getProfile(): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.httpService.getHandle(url).subscribe((res: Result) => {
      if (res.success) {
        this.userSubject.next(res.data);
      }
    });
  }

  updateProfile(formData: any): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.httpService.putHandle(url, formData).subscribe((res: Result) => {
      if (res.success){
        this.userSubject.next(res.data);
        this.snackbarModifyService.openMessage(res, 'Cập nhật thành công');
      }
    });
  }

  updatePassword(password): any {
    const url = 'UserAuth/change-password/' + this.tokenService.getUserId();
    this.httpService.putHandle(url, password).subscribe((res: Result) => {
        this.snackbarModifyService.openMessage(res, 'Cap nhat thanh cong');
    });
  }

  getAllCity(): any {
    const url = 'Address/GetAllCity';
    this.httpService.getHandle(url).subscribe((res: Result) => {
      this.citySubject.next(res.data);
    });
  }

  getDistrictByCityId(cityAddressId: number): any {
    const url = 'Address/GetDistrictById/' + cityAddressId;
    this.httpService.getHandle(url).subscribe((res: Result) => {
      this.districtSubject.next(res.data);
    });
  }

  getWardByCityIdAndDistrictId(address: Address): any {
    console.log(address);
    const url = 'Address/GetWardByCityIdAndDistrict/' + address.cityAddressId + '/' + address.districtAddressId;
    this.httpService.getHandle(url).subscribe((res: Result) => {
      this.wardSubject.next(res.data);
    });
  }

  updateAddress(value: any): any {
    const url = 'Address/' + this.tokenService.getUserId();
    return this.httpService.putHandle(url, value);
  }

  deleteAddress(): any {
    const url = 'Address/' + this.tokenService.getUserId();
    return this.httpService.deleteHandle(url);
  }

  getDistrictAndWardByCityId(value: any): any {
    const url = 'Address/GetDistrictAndWardByCityId/' + value;
    return this.httpService.getHandle(url);
  }

  getAllWardByDistrictId(districtAddressId: number): any {
    const url = 'Address/GetWardByDistrict/' + districtAddressId;
    this.httpService.getHandle(url).subscribe((res: Result) => {
      this.wardSubject.next(res.data);
    });
  }

  getDistrictByCityIdModify(cityAddressId: number): any {
    const url = 'Address/GetDistrictById/' + cityAddressId;
    return  this.httpService.getHandle(url);
  }

  getWardByCityIdAndDistrictIdModify(address: Address): any {
    const url = 'Address/GetWardByCityIdAndDistrict/' + address.cityAddressId + '/' + address.districtAddressId;
    return  this.httpService.getHandle(url);
  }

  AddAddress(value: any): any {
    const url = 'Address';
    return this.httpService.postHandle(url, value);
  }
}
