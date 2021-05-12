import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AlertService} from '../../../core/services/alert.service';
import {AlertComponent} from '../../../components/alert/alert.component';
import {TokenService} from '../../../core/services/token.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup} from '@angular/forms';
import {Result} from '../../../models/result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService,
              private router: Router, private matSnackBar: MatSnackBar,
              private tokenService: TokenService) {}
  @Output() toggleDisplay = new EventEmitter();

  isFormDisplay = true;

  // login(): any {
  //   this.authService.login().subscribe(() => {
  //     if (this.authService.isLoggedIn) {
  //       // Usually you would use the redirect URL from the auth service.
  //       // However to keep the example simple, we will always redirect to `/admin`.
  //       const redirectUrl = 'hero/heroes';
  //       // Redirect the user
  //       this.router.navigate([redirectUrl]);
  //     }
  //   });
  // }
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    comfirmPassword: new FormControl(''),
    name: new FormControl('')
  });

  ngOnInit(): void { this.toggleChangeForm(); }

  logout(): any {
    this.authService.logout();
  }

  toggleDisplayCall(): any {
    this.toggleDisplay.emit();
  }
  toggleChangeForm(): any {
    if (this.isFormDisplay) {
      document.getElementById('login').classList.add('show');
      document.getElementById('register').classList.remove('show');
    } else {
      document.getElementById('login').classList.remove('show');
      document.getElementById('register').classList.add('show');
    }
    this.isFormDisplay = !this.isFormDisplay;
  }

  login(username: string, password: string): any {
    this.authService.login({username, password}).subscribe(res => {
      console.log(res);
      if (res.success){
        this.matSnackBar.open('Đăng nhập thành công', 'Undo', {duration: 2000});
        this.authService.isLoggedIn = true;
        this.tokenService.setRefreshToken(res.data.refresh);
        this.tokenService.setToken(res.data.access);
        const redirectUrl = '/';
        this.router.navigate([redirectUrl]);
        this.toggleDisplay.emit();
      }else {
        this.matSnackBar.open(res.error_message, 'Undo', {duration: 2000});
      }
    });
  }

  register(): any {
    let usn = this.registerForm.get('username').value;
    let pwRegister = this.registerForm.get('password').value;
    let pwConfirm = this.registerForm.get('comfirmPassword').value;
    let name = this.registerForm.get('name').value;
    let checkPassword = new RegExp('^([a-zA-Z0-9@#$%*]){6,}$');
    let checkName = new RegExp('^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕUÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ_ ]{3,30}$');
    let checkUsername = new RegExp('^[a-z0-9_-]{3,15}$');
    if(checkUsername.test(usn) && checkPassword.test(pwRegister) && pwRegister === pwConfirm && checkName.test(name))
    {
      this.authService.register(this.registerForm.value).subscribe((result: Result) => {
        if (result.success){
          this.matSnackBar.open(result.data.toString(), 'Close', {
            duration: 2000
          });
          this.toggleChangeForm();
        }else {
          this.matSnackBar.open(result.error_message, 'Close', {
            duration: 2000
          });
        }
      });
    }
    else
    {
      if(checkPassword.test(pwRegister) === false){
        this.matSnackBar.open('Mật khẩu phải ít nhất 6 ký tự, vui lòng thử lại !', 'Close', {
          duration: 2000
        });
      }
      if(pwRegister !== pwConfirm){
        this.matSnackBar.open('Mật khẩu chưa trùng nhau, vui lòng thử lại !', 'Close', {
          duration: 2000
        });
      }
      if(checkName.test(name) === false){
        this.matSnackBar.open('Tên không hợp lệ, vui lòng thử lại !', 'Close', {
          duration: 2000
        });
      }
      if(checkUsername.test(usn) === false){
        this.matSnackBar.open('Tên đăng nhập có ít nhất 3 ký tự và không chứa ký tự đặc biệt, vui lòng thử lại !', 'Close', {
          duration: 2000
        });
      }
      if(checkName.test(name) === false){
        this.matSnackBar.open('Tên không hợp lệ hoặc quá ít ký tự, vui lòng thử lại !', 'Close', {
          duration: 2000
        });
      }
    }
    console.log(this.registerForm.value);
  }
}
