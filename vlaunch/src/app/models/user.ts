export class City {
  'id': number;
  'cityName': string;
  'cityCode': string;

  constructor() {
    this.id = 0;
    this.cityName = '';
    this.cityCode = '';
  }
}

export class District {
  'id': number;
  'districtName': string;
  'prefix': string;
  'cityAddressId': number;
  'cityAddress': City;


  constructor() {
    this.id = 0;
    this.districtName = '';
    this.prefix = '';
    this.cityAddressId = 0;
    this.cityAddress = new City();
  }
}

export class Ward {
  'id': number;
  'name': string;
  'prefix': string;
  'cityAddressId': number;
  'districtAddressId': number;
  'districtAddress': District;

  constructor() {
    this.id = 0;
    this.name = '';
    this.prefix = '';
    this.cityAddressId = 0;
    this.districtAddressId = 0;
    this.districtAddress = new District();
  }
}

export class Address {

  constructor() {
    this.id = 0;
    this.street_Address = '';
    this.phone = 'phone';
    this.name = '';
    this.cityAddressId = 0;
    this.districtAddressId = 0;
    this.wardId = 0;
    this.ward = new Ward();
  }

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
