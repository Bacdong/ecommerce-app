import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Result} from '../../models/result';

@Injectable({
  providedIn: 'root'
})
export class SnackbarModifyService {

  constructor(private matSnackBar: MatSnackBar) { }

  openMessage(res: Result, message?: string): any {
    if (res.success){
      if (message){
          this.matSnackBar.open(message, 'Close', {
            duration: 3000
          });
      }else {
        this.matSnackBar.open(res.data, 'Close', {
          duration: 3000
        });
      }
    }else {
      this.matSnackBar.open(res.error_message, 'Close', {
        duration: 3000
      });
    }
  }
}
