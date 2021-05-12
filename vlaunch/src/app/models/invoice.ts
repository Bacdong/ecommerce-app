import {Ward} from './user';

export class Invoice{
  'id': number;
  'createAt': Date;
  'totalMoney': number;
  'userId': number;
  'statusId': number;
  'isOnlinePayment': boolean;
  'cityAddressId': 2;
  'districtAddressId': number;
  'wardId': number;
  ward: Ward;
  'email': string;
  'name': string;
  'phone': string;
}
