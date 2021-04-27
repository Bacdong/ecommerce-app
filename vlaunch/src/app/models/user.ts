export class City {
  'id': number;
  'cityName': string;
  'cityCode': string;
}

export class District {
  'id': number;
  'districtName': string;
  'prefix': string;
  'cityAddressId': number;
  'cityAddress': City;
}

export class Ward {
  'id': number;
  'name': string;
  'prefix': string;
  'cityAddressId': number;
  'districtAddressId': number;
  'districtAddress': District;
}

export class Address {
  'id': number;
  'street_Address': string;
  'phone': string;
  'name': string;
  'cityAddressId': number;
  'districtAddressId': number;
  'wardId': number;
  'ward': Ward;
}

export class User{
  'name': string;
  'email': string;
  'phone': string;
  'avatar': string;
  'addresses': Address[];
  'isAccess': boolean;
  'roleId': number;
}
