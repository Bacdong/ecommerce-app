import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Address, City, District, User, Ward} from '../../../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Result} from '../../../../models/result';
import { SnackbarModifyService } from 'src/app/core/services/snackbar-modify.service';

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
  wardList: Ward[] = [];
  cityId: number;
  formAddress = new FormGroup({});
  isDelete: boolean;
  constructor(private userService: UserService, private snackbarModifyService: SnackbarModifyService) { }

  ngOnInit(): void {
    this.initAllCity();
    this.initForm();
    this.userService.getProfile();
    this.userService.$user.subscribe(res => {
      this.listAddress = res.addresses;
      if (!(this.listAddress === undefined) && !(this.listAddress.length === 0)){
        this.address = this.listAddress.pop();
        this.isDelete = true;
      }else {
        this.isDelete = false;
      }
      this.formAddress.get('name').value = this.address.name;
      this.formAddress.get('phone').value = this.address.phone;
      this.formAddress.get('cityAddressId').value = this.address.cityAddressId;
      this.formAddress.get('districtAddressId').value = this.address.districtAddressId;
      this.formAddress.get('wardId').value = this.address.wardId;
      this.formAddress.get('street_Address').value = this.address.street_Address;
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

  submitForm(): any {
    console.log(this.formAddress.value);
    if (this.formAddress.invalid){
      this.snackbarModifyService.openMessage({error_message: 'Thong tin dia chi khong hop le', success: false, data: ''});
      return;
    }
    this.userService.updateAddress(this.formAddress.value).subscribe((res: Result) => {
      if (res.success){
        this.snackbarModifyService.openMessage(res);
      }
    });
  }

  private initForm(): any {
    this.formAddress = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      cityAddressId: new FormControl('', Validators.required),
      districtAddressId: new FormControl('', Validators.required),
      wardId: new FormControl('', Validators.required),
      street_Address: new FormControl(),
    });
  }

  deleteAddress(): any {
    this.isEdit = !this.isEdit;
    this.isDelete = !this.isDelete;
    this.userService.deleteAddress().subscribe((res: Result) => {
      this.snackbarModifyService.openMessage(res);
    });
  }

  changeProvince(value: any): any {
    this.userService.getDistrictAndWardByCityId(value).subscribe(res => {
      this.address = res.data;
      this.userService.getDistrictByCityIdModify(this.address.cityAddressId).subscribe(dis => {
        this.districtList = dis.data;
        this.userService.getWardByCityIdAndDistrictIdModify(this.address).subscribe(ward => {
            this.wardList = ward.data;
        });
      });
    });
  }

  changeDistrict(value: any): any{
    const address: Address = {
      id: 0,
      districtAddressId: value,
      cityAddressId: this.address.cityAddressId
    };
    // this.userService.getWardByCityIdAndDistrictId(address);
    this.userService.getWardByCityIdAndDistrictIdModify(address).subscribe(res => {
      this.wardList = res.data;
    });
  }
}
