import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Alert } from 'src/app/models/alert';
import { UserProfile } from 'src/app/models/user-profile';
import {TokenService} from '../../../core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpService, private alertService: AlertService, private tokenService: TokenService) {}

  profile$ = new Subject<UserProfile>();
  submitted = false;

  getProfile(): any {
    const url = 'userauth/profile/' + this.tokenService.getUserId();
    this.http.getHandle(url).subscribe((res) => {
      if (res?.success) {
        this.profile$.next({...res.data});
      } else {
        this.alertService.errorAlert(res);
        return null;
      }
    });
  }

  updateProfile(data: FormData): any{
    const url = 'userauth/profile/' + this.tokenService.getUserId();
    this.http.putHandle(url, data).subscribe(
      res => {
        if (res.success){
          this.profile$.next({ ...res.data });
          this.alertService.successAlert('Cập nhật thông tin cá nhân thành công.');
          console.log(res);
        }else {
          this.alertService.errorAlert(res);
        }
      }
    );
    this.submitted = false;
    }

  async changePassword(data: object): Promise<any> {
    const url = 'userauth/change-password/' + this.tokenService.getUserId();
    await this.http.putHandle(url, data).subscribe((res) => {
      if (res && res.success) {
        this.profile$.next({ ...res.data });
        this.alertService.successAlert('Đổi mật khẩu thành công');
      } else {
        this.alertService.errorAlert(res);
      }
      this.submitted = false;
    });
  }
}
