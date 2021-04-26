import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultImagePipe} from '../../../core/pipes';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [DefaultImagePipe, ProfileComponent, UserComponent, DefaultImagePipe, PasswordComponent, AddressComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class UserModule { }
