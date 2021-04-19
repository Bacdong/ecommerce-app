import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../core/services/token.service';

@Component({
  selector: 'app-vlaunch',
  templateUrl: './vlaunch.component.html',
  styleUrls: ['./vlaunch.component.scss']
})
export class VlaunchComponent implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit(): void {
  }

}
