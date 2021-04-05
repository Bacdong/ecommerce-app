import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'craftsmanship that takes your breath away...';
  constructor() { }

  ngOnInit(): void {
  }

}
