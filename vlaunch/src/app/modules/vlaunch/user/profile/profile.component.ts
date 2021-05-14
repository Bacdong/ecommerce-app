import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/core/utils';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService, private matSnackBar: MatSnackBar) { }
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
    let name =  this.profileForm.get('name').value;
    let emai = this.profileForm.get('email').value;
    let checkName = new RegExp('^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕUÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ_ ]{3,30}$');
    let checkEmail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    const formValue = this.profileForm.value;
    const formData = new FormData();

    for (const key in formValue) {
      if (key === 'avatar' || !formValue[key] || formValue[key] === '') { continue; }
      formData.append(key, formValue[key]);
    }

    if (this.uploadService.imagePath) {
      formData.append('avatar', this.uploadService.imagePath);
    }
    if(checkName.test(name) && checkEmail.test(emai))
    {
      this.userService.updateProfile(formData);
      this.matSnackBar.open('Cập nhật thành công!', 'Close', {
        duration: 2000
      })
    }
    else {
      if(checkName.test(name) === false){
        this.matSnackBar.open('Tên không hợp lệ, vui lòng thử lại!', 'Close', {
          duration: 2000
        })
      }
      if(checkEmail.test(emai) === false){
        this.matSnackBar.open('Email không hợp lệ, vui lòng thử lại!', 'Close', {
          duration: 2000
        })
      }
    }
  }
}
