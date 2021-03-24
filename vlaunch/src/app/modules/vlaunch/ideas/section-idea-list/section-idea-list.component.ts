import { Component, OnInit } from '@angular/core';
import { IDEAS } from './ideas';

@Component({
  selector: 'app-section-idea-list',
  templateUrl: './section-idea-list.component.html',
  styleUrls: ['./section-idea-list.component.scss']
})
export class SectionIdeaListComponent implements OnInit {
  ideas = IDEAS;
  constructor() { }

  ngOnInit(): void {
  }

}
