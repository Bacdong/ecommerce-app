import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/core/utils';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) { }
  uploadService = new UploadService();

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    avatar: [],
  });

  ngOnInit(): void {
    this.userService.getProfile();
    this.userService.$user.subscribe(res => {
      this.profileForm.setValue({
        name: res.name ? res.name : '',
        email: res.email ? res.email : '',
        avatar: res.avatar ? res.avatar : '',
      });
    });
  }

  updateProfile(): any {
    const formValue = this.profileForm.value;
    const formData = new FormData();

    for (const key in formValue) {
      if (key === 'avatar' || !formValue[key] || formValue[key] === '') { continue; }
      formData.append(key, formValue[key]);
    }

    if (this.uploadService.imagePath) {
      formData.append('avatar', this.uploadService.imagePath);
    }
    this.userService.updateProfile(formData);
  }
}
