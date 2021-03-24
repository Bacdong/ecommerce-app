import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SLIDES } from './room-preview';

@Component({
  selector: 'app-room-preview',
  templateUrl: './room-preview.component.html',
  styleUrls: ['./room-preview.component.scss']
})
export class RoomPreviewComponent implements OnInit {
  @Output() closeEmitter = new EventEmitter();
  slides = SLIDES;
  constructor() { }

  ngOnInit(): void {
  }

  closePreview() {
    this.closeEmitter.emit(true);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 15,
    navText: ['&lsaquo;', '&rsaquo;'],
    responsive: {
      0: { items: 1, },
      300: { items: 1, },
      650: { items: 1, },
      800: { items: 1, },
    },
    nav: true,
  };
}
