import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultImagePipe} from '../../../core/pipes';
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



@NgModule({
  declarations: [DefaultImagePipe, ProfileComponent, UserComponent, DefaultImagePipe, PasswordComponent, AddressComponent, AddressAddComponent],
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
  ]
})
export class UserModule { }