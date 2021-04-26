import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  oldPassword: '';
  newPassword: '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  changePassword(): any {
    const password = {
      old_password: this.oldPassword,
      new_password: this.newPassword
    };
    this.userService.updatePassword(password);
  }
}
