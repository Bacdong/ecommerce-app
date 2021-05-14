import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultImagePipe, FormatDatePipe, OrderStatusPipe, PaymentMethodPipe} from '../../../core/pipes';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { AddressComponent } from './address/address.component';
import {MaterialModule} from '../material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddressAddComponent } from './address/address-add/address-add.component';
import {OrderComponent} from '../order/order.component';
import {ShareModule} from '../share.module';
import {OrderDetailComponent} from '../order/order-detail/order-detail.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    DefaultImagePipe,
    ProfileComponent,
    UserComponent,
    DefaultImagePipe,
    PasswordComponent,
    AddressComponent,
    AddressAddComponent,
    OrderStatusPipe,
    OrderComponent,
    FormatDatePipe,
    PaymentMethodPipe,
    OrderDetailComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MaterialModule,
    ShareModule,
  ]
})
export class UserModule { }
