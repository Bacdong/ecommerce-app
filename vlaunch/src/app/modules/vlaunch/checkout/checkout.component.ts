import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../core/services/token.service';
import {UserService} from '../user/user.service';
import {Result} from '../../../models/result';
import {Address, City, District, Ward} from '../../../models/user';
import {UserAddress} from '../../../models/user-address';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  addressForm = new FormGroup({
    userAddressId: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    cityAddressId: new FormControl(),
    districtAddressId: new FormControl(),
    wardId: new FormControl(),
    street_Address: new FormControl()
  });
  addressList: UserAddress[] = [];
  addressSelected: UserAddress = new UserAddress();
  cityList: City[] = [];
  districtList: District[] = [];
  wardList: Ward[] = [];
  paymentMethodSelected = 1;
  constructor(public tokenService: TokenService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserAddress(this.tokenService.getUserId()).subscribe(res => {
      this.addressList = res.data;
      if (this.addressList.length !== 0){
        this.addressSelected = this.addressList[0];
      }
      this.userService.getAllCityModify().subscribe(city => {
       this.cityList = city.data;
       this.userService.getDistrictByCityIdModify(this.addressSelected.cityAddressId).subscribe(dis => {
         this.districtList = dis.data;
         this.userService.getWardByCityIdAndDistrictIdModify(this.addressSelected).subscribe(ward => {
           this.wardList = ward.data;
         });
       });
      });
    });
  }

  createOrder(): any {

  }

  selectAddress(): any {

  }

  changeProvince(value: any): any {
    this.userService.getDistrictAndWardByCityId(value).subscribe(res => {
      this.addressSelected.cityAddressId = res.data.cityAddressId;
      this.addressSelected.districtAddressId = res.data.districtAddressId;
      this.addressSelected.wardId = res.data.wardId;
      this.userService.getDistrictByCityIdModify(this.addressSelected.cityAddressId).subscribe(dis => {
        this.districtList = dis.data;
        this.userService.getWardByCityIdAndDistrictIdModify(this.addressSelected).subscribe(ward => {
          this.wardList = ward.data;
        });
      });
    });
  }

  addVoucher(voucher: HTMLInputElement): any {

  }

  hasAddress(): any {
    return this.addressList !== [];
  }

  check(id: any): any {
    return this.addressSelected.id === id;
  }

  changeDistrict(value: any): any {
    this.userService.getWardByCityIdAndDistrictIdModify(this.addressSelected).subscribe(res => {
      this.wardList = res.data;
    });
  }
}
