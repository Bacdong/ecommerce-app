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
}
