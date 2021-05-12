import {City, District, User, Ward} from './user';

export class UserAddress{
  'id': number;
  'street_Address': string;
  'phone': string;
  'name': string;
  'userId': number;
  'user': User;
  'cityAddressId': number;
  'cityAddress': City;
  'districtAddressId': number;
  'districtAddress': District;
  wardId: number ;
  ward: Ward;

  constructor() {
    this.id = 0;
    this.street_Address = '';
    this.phone = '';
    this.name = '';
    this.userId = 1;
    this.user = new User();
    this.cityAddressId = 1;
    this.cityAddress = new City();
    this.districtAddressId = 1;
    this.districtAddress = new District();
    this.wardId = 1;
    this.ward = new Ward();
  }
}

