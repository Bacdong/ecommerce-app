import { Component, OnInit } from '@angular/core';
import { FOOTER_FEATURE_CATEGORIES, FOOTER_INFO_CATEGORIES } from './footer-categories';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  infoCategories = FOOTER_INFO_CATEGORIES;
  featureCategories = FOOTER_FEATURE_CATEGORIES;
  constructor() { }

  ngOnInit(): void {
  }

}
