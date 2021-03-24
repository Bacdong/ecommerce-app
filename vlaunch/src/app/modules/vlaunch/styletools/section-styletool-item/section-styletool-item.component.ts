import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-styletool-item',
  templateUrl: './section-styletool-item.component.html',
  styleUrls: ['./section-styletool-item.component.scss']
})
export class SectionStyletoolItemComponent implements OnInit {
  @Input() styletool;

  constructor() { }

  ngOnInit(): void {
  }

}
