import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/auth/auth.service';
import { formatPrice } from './core/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}

  title = 'BookStore';

  price = formatPrice(100000);

  ngOnInit(): void {
    console.log(environment.CONFIG_CHECK);
  }
}
