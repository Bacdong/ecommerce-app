import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-item',
  templateUrl: './idea-item.component.html',
  styleUrls: ['./idea-item.component.scss']
})
export class IdeaItemComponent implements OnInit {
  @Input() idea;
  constructor() { }

  ngOnInit(): void {
  }

}
