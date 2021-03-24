import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-category',
  templateUrl: './footer-category.component.html',
  styleUrls: ['./footer-category.component.scss']
})
export class FooterCategoryComponent implements OnInit {
  @Input() category;
  constructor() { }

  ngOnInit(): void {
  }

}
