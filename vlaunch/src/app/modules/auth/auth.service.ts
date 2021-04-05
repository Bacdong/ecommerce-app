import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { HttpService } from '../../core/services/http.service';
import {TokenService} from '../../core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private alertService: AlertService,
    private tokenService: TokenService
  ) {}

  profile: object;
  isLogin = false;

  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  apiLogin(data): void {
    const url = 'auth/login';
    this.httpService.postHandle(url, data).subscribe((res) => {
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

  getProfile(): any {
    const url = 'auth/profile';
    this.httpService.getHandle(url).subscribe((res) => {
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

  updateProfile(data: FormData): any {
    const url = 'auth/profile';
    this.httpService.putHandle(url, data).subscribe((res) => {
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

  // login(): any {
  //   const url = '/UserAuth/login';
  //   return this.httpService.postHandle(url, data).subscribe(res => {
  //     this.isLoggedIn = true;
  //   });
  // }

  logout(): void {
    this.isLoggedIn = false;
    this.tokenService.clear();
  }

  login(param: { password: string; username: string }): any{
    const url = 'UserAuth/login';
    return this.httpService.postHandle(url, param);
  }
}
