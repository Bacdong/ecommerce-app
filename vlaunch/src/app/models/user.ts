class UserAddress {
  'id': number;
  'street_Address': string;
  'phone': string;
  'name': string;
  'cityAddressId': number;
  'cityAddress': string;
  'districtAddressId': number;
  'districtAddress': number;
  'isDefault': boolean;
}

export class User{
  'name': string;
  'email': string;
  'phone': string;
  'avatar': string;
  'addresses': UserAddress[];
  'isAccess': boolean;
  'roleId': number;
}
