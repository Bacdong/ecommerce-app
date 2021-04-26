import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {TokenService} from '../../../core/services/token.service';
import {Result} from '../../../models/result';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../../models/user';
import { SnackbarModifyService } from 'src/app/core/services/snackbar-modify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject(new User());
  $user = this.userSubject.asObservable();
  constructor(private httpService: HttpService, private tokenService: TokenService, private snackbarModifyService: SnackbarModifyService) { }

  getProfile(): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.httpService.getHandle(url).subscribe((res: Result) => {
      if (res.success) {
        this.userSubject.next(res.data);
      }
    });
  }

  updateProfile(formData: any): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.httpService.putHandle(url, formData).subscribe((res: Result) => {
      if (res.success){
        this.userSubject.next(res.data);
        this.snackbarModifyService.openMessage(res, 'Cập nhật thành công');
      }
    });
  }

  updatePassword(password): any {
    const url = 'UserAuth/change-password/' + this.tokenService.getUserId();
    this.httpService.putHandle(url, password).subscribe((res: Result) => {
        this.snackbarModifyService.openMessage(res, 'Cap nhat thanh cong');
    });
  }
}
