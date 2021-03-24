import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {
  @Input() room;
  @Output() eventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  showPreview() {
    this.eventEmitter.emit(true);
  }
}
