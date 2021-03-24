import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { HttpService } from '../../core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private alertService: AlertService
  ) {}

  profile: object;
  isLogin = false;

  apiLogin(data): void {
    const url = 'auth/login';
    this.httpService.post(url, data).subscribe((res) => {
      if (res && res.success) {
        this.isLogin = true;
        localStorage.setItem('token', res.data.access);
      } else {
        this.alertService.addAlert({
          message: res.error_message,
          error_code: res.error_code,
        });
      }
    });
  }

  getProfile() {
    const url = 'auth/profile';
    this.httpService.get(url).subscribe((res) => {
      if (res && res.success) {
        this.profile = { ...res.data };
        console.log(this.profile);
      } else {
        this.alertService.addAlert({
          message: res.error_message,
          error_code: res.error_code,
        });
      }
    });
  }

  updateProfile(data: FormData) {
    const url = 'auth/profile';
    this.httpService.put(url, data).subscribe((res) => {
      if (res && res.success) {
        this.profile = { ...res.data };
      } else {
        this.alertService.addAlert({
          message: res.error_message,
          error_code: res.error_code,
        });
      }
    });
  }

  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
