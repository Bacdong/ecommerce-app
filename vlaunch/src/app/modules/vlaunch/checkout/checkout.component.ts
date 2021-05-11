import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../core/services/token.service';
import {UserService} from '../user/user.service';
import {Result} from '../../../models/result';
import {Address} from '../../../models/user';
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

  constructor(public tokenService: TokenService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserAddress(this.tokenService.getUserId()).subscribe(res => {
      this.addressList = res.data;
      console.log(res);
    });
  }

  createOrder(): any {

  }

  selectAddress(): any {

  }

  changeProvince(value: any): any {

  }

  addVoucher(voucher: HTMLInputElement): any {

  }

  hasAddress(): any {
    return this.addressList !== [];
  }
}
