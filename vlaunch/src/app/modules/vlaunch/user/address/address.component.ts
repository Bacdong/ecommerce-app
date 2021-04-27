import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Address, City, District} from '../../../../models/user';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  listAddress: Address[];
  cityList: City[] = [];
  districtList: District [] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile();
    this.userService.$user.subscribe(res => {
      this.listAddress = res.addresses;
      console.log(res);
      this.initAllCity();
    });
  }

  private initAllCity(): void {
    this.userService.getAllCity();
    this.userService.$city.subscribe(res => {
      this.cityList = res;
    });
  }

}
