import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UserService} from '../user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  oldPassword: '';
  newPassword: '';

  constructor(private userService: UserService,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  changePassword(): any {
    let checkPassword = new RegExp('^([a-zA-Z0-9@#$%*]){6,}$');

    const password = {
      old_password: this.oldPassword,
      new_password: this.newPassword
    };
    if(checkPassword.test(this.oldPassword) && checkPassword.test(this.newPassword) && this.oldPassword !== this.newPassword)
    {
      this.userService.updatePassword(password);
    }
    else {
      this.matSnackBar.open('Mật khẩu không hợp lệ, vui lòng thử lại!', 'Close', {
        duration: 2000
      });
    }
  }
}
