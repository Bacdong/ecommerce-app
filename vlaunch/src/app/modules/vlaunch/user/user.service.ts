import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {TokenService} from '../../../core/services/token.service';
import {Result} from '../../../models/result';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject(new User());
  $user = this.userSubject.asObservable();
  constructor(private httpService: HttpService, private tokenService: TokenService) { }

  getProfile(): any {
    const url = 'UserAuth/profile/' + this.tokenService.getUserId();
    this.httpService.getHandle(url).subscribe((res: Result) => {
      if (res.success) {
        this.userSubject.next(res.data);
      }
    });
  }
}
