import { Component, OnInit } from '@angular/core';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  title: string = '';
  background: string = "assets/images/backgrounds/room-page/banner.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
