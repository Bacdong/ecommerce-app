import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from '../vlaunch/user/user.component';
import {ShareModule} from '../vlaunch/share.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule,
    MatIconModule,
    CarouselModule,
    RouterModule],
})
export class AuthModule {}
