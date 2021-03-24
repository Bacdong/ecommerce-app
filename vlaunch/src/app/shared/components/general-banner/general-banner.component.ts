import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-banner',
  templateUrl: './general-banner.component.html',
  styleUrls: ['./general-banner.component.scss']
})
export class GeneralBannerComponent implements OnInit {
  @Input() title: string;
  @Input() classAdd: string;
  @Input() background: string;

  defaultBackground: string = "assets/images/backgrounds/product-page/banner.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
