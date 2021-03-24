import { Component, OnInit } from '@angular/core';
import { STYLE_TOOLS } from './style-tools';

@Component({
  selector: 'app-section-styletools',
  templateUrl: './section-styletools.component.html',
  styleUrls: ['./section-styletools.component.scss']
})
export class SectionStyletoolsComponent implements OnInit {
  styletools = STYLE_TOOLS;
  constructor() { }

  ngOnInit(): void {
  }

}
