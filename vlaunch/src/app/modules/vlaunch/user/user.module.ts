import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DefaultImagePipe} from '../../../core/pipes';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [DefaultImagePipe, ProfileComponent, UserComponent, DefaultImagePipe],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
