import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-subscribe',
  templateUrl: './footer-subscribe.component.html',
  styleUrls: ['./footer-subscribe.component.scss']
})
export class FooterSubscribeComponent implements OnInit {
  currentYear;
  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    this.currentYear = date.getFullYear();
  }

}
