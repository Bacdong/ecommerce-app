import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  isDisplay = false;
  rooms = ROOMS;
  constructor() { }

  ngOnInit(): void {
  }

  togglePreview() {
    this.isDisplay = !this.isDisplay;
    if (this.isDisplay == true) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'unset';
    }
  }
}
