import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Address, City, District, User, Ward} from '../../../../models/user';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatOptionSelectionChange} from '@angular/material/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {
  listAddress: Address[];
  cityList: City[] = [];
  isEdit = false;
  address: Address = new Address();

  private subscription: Subscription = new Subscription();
  districtList: District[] = [];
  private wardList: Ward[] = [];
  private cityId: number;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initAllCity();
    this.userService.getProfile();
    this.userService.$user.subscribe(res => {
      this.listAddress = res.addresses;
      if (!(this.listAddress === undefined) && !(this.listAddress.length === 0)){
        this.address = this.listAddress.pop();
      }
      this.initDistrictByCityId(this.address);
    });
  }


  private initAllCity(): void {
    this.userService.getAllCity();
    this.userService.$city.subscribe(res => {
      this.cityList = res;
    });
  }

  editAddress(): any {
    this.isEdit = ! this.isEdit;
  }

  updateAddress(): any {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initDistrictByCityId(address: Address | any): any {
    this.userService.getDistrictByCityId(address.cityAddressId);
    this.userService.$district.subscribe(res => {
      this.districtList = res;
      this.InitWardByCityIdAndDistrictId(address);
    });
  }

  private InitWardByCityIdAndDistrictId(address: Address): any {
    this.userService.getWardByCityIdAndDistrictId(address);
    this.userService.$ward.subscribe(res => {
      this.wardList = res;
      console.log(res);
    });
  }

  getDistrictById($event: number): any {
    this.userService.getDistrictByCityId($event);
    this.cityId = $event;
  }

  getWard(cityAddressId: number, $event: any): any {
    const address = new Address();
    address.cityAddressId = cityAddressId;
    address.districtAddressId = $event;
    console.log(address);
    this.userService.getWardByCityIdAndDistrictId(address);
  }
}
