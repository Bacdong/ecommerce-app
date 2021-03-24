import { Component, OnInit } from '@angular/core';
import { STYLETOOL_ITEMS } from './styletool-items';

@Component({
  selector: 'app-styletools',
  templateUrl: './styletools.component.html',
  styleUrls: ['./styletools.component.scss']
})
export class StyletoolsComponent implements OnInit {
  classAdd: string = "has-action";
  background: string = "assets/images/backgrounds/styletool-page/banner.jpg";
  styletools = STYLETOOL_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
