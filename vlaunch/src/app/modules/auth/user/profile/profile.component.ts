import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UploadService } from 'src/app/core/utils';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(public service: ProfileService, private fb: FormBuilder) {}

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    avatar: [],
  });

  subscription = new Subscription();
  uploadService = new UploadService();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.service.getProfile();

    this.subscription.add(
      this.service.profile$.subscribe((profile) => {
        this.profileForm.setValue({
          name: profile.name,
          email: profile.email,
          avatar: profile.avatar,
        });
      })
    );
  }

  updateProfile(): any {
    this.service.submitted = true;
    const formValue = this.profileForm.value;
    const formData = new FormData();

    for (const key in formValue) {
      if (key === 'avatar' || !formValue[key] || formValue[key] === '') { continue; }
      formData.append(key, formValue[key]);
    }

    if (this.uploadService.imagePath) {
      formData.append('avatar', this.uploadService.imagePath);
    }
    this.service.updateProfile(formData);
  }
}
