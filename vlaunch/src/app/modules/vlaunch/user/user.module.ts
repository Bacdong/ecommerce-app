import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { PasswordComponent } from './password/password.component';
import { ShareModule } from '../../../../../../../BookStoreClient/vlaunch/src/app/modules/share.module';
import { AddressComponent } from './address/address.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PipesModule } from '../../BookStoreClient/vlaunch/src/app/core/pipe/pipes.module';
import { ProductRatingComponent } from './product-rating/product-rating.component';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    PasswordComponent,
    AddressComponent,
    AddressFormComponent,
    OrderComponent,
    OrderDetailComponent,
    ProductRatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule { }
