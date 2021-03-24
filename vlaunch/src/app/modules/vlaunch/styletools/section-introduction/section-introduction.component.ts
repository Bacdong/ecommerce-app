import { Component, OnInit } from '@angular/core';
import { STYLETOOLS } from './styletools';

@Component({
  selector: 'app-section-introduction',
  templateUrl: './section-introduction.component.html',
  styleUrls: ['./section-introduction.component.scss']
})
export class SectionIntroductionComponent implements OnInit {
  actions = STYLETOOLS;
  constructor() { }

  ngOnInit(): void {
  }

}
