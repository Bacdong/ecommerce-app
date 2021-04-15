import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  successMessage(message: string): any {
    this.showSnackBar(message);
    window.location.reload();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
  }

  errorMessage(res): any {
    if (res) {
      localStorage.clear();
      window.location.reload();
    }
    this.showSnackBar(res.error_message);
  }
}
