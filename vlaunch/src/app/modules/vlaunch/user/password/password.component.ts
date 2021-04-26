import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  constructor(public service: ProfileService) {}

  oldPassword = '';
  newPassword = '';

  ngOnInit(): void {}

  async changePassword(): Promise<any> {
    this.service.submitted = true;

    const data = {
      old_password: this.oldPassword,
      new_password: this.newPassword,
    };
    await this.service.changePassword(data);
  }
}
