import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { ShareModule } from '../share.module';
import { RouterModule } from '@angular/router';
import { VlaunchRoutingModule } from '../vlaunch-routing.module';
import { RoomListComponent } from './room-list/room-list.component';
import { MatIconModule } from '@angular/material/icon';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomPreviewComponent } from './room-preview/room-preview.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomPreviewComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ShareModule,
    RouterModule,
    CarouselModule,
    VlaunchRoutingModule,
  ]
})
export class RoomsModule { }
