import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() toggleDisplay = new EventEmitter();
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void { this.toggleChangeForm(); }

  login(): any {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = 'hero/heroes';
        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout(): any {
    this.authService.logout();
  }

  toggleDisplayCall() {
    this.toggleDisplay.emit();
  }

  isFormDisplay: boolean = true;
  toggleChangeForm() {
    if (this.isFormDisplay) {
      document.getElementById('login').classList.add('show');
      document.getElementById('register').classList.remove('show');
    } else {
      document.getElementById('login').classList.remove('show');
      document.getElementById('register').classList.add('show');
    }
    this.isFormDisplay = !this.isFormDisplay;
  }
}
