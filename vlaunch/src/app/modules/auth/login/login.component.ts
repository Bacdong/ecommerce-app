import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AlertService} from '../../../core/services/alert.service';
import {AlertComponent} from '../../../components/alert/alert.component';
import {TokenService} from '../../../core/services/token.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    comfirmPassword: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
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
        this.matSnackBar.open('????ng nh???p th??nh c??ng', 'Undo', {duration: 2000});
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
    let checkName = new RegExp('^[a-zA-Z_?????????????????????????????U?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????_ ]{3,30}$');
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
        this.matSnackBar.open('M???t kh???u ph???i ??t nh???t 6 k?? t???, vui l??ng th??? l???i !', 'Close', {
          duration: 2000
        });
      }
      if(pwRegister !== pwConfirm){
        this.matSnackBar.open('M???t kh???u ch??a tr??ng nhau, vui l??ng th??? l???i !', 'Close', {
          duration: 2000
        });
      }
      if(checkName.test(name) === false){
        this.matSnackBar.open('T??n kh??ng h???p l???, vui l??ng th??? l???i !', 'Close', {
          duration: 2000
        });
      }
      if(checkUsername.test(usn) === false){
        this.matSnackBar.open('T??n ????ng nh???p c?? ??t nh???t 3 k?? t??? v?? kh??ng ch???a k?? t??? ?????c bi???t, vui l??ng th??? l???i !', 'Close', {
          duration: 2000
        });
      }
      if(checkName.test(name) === false){
        this.matSnackBar.open('T??n kh??ng h???p l??? ho???c qu?? ??t k?? t???, vui l??ng th??? l???i !', 'Close', {
          duration: 2000
        });
      }
    }
    console.log(this.registerForm.value);
  }
}
