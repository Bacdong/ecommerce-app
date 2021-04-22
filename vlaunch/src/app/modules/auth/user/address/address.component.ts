import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { AddressFormService } from '../address-form/address-form.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  constructor(
    public service: AddressFormService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.service.getAddresses();
  }

  delete(id) {
    this.service.deleteAddress(id);
  }
}
