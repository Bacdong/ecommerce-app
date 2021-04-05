import { Injectable } from '@angular/core';
import { Alert } from 'src/app/components/alert/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert: Alert;

  constructor() {}

  addAlert(alert: Alert): void {
    this.alert = alert;
  }

  clear(): any {
    this.alert = null;
  }
}
