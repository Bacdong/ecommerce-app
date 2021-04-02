import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private payload: any;
  constructor() {

  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUserId(): string {
    this.payload = jwtDecode(this.getToken());
    return this.payload.id;
  }

  hasToken(): any {
    return  localStorage.getItem('token');
  }

  setToken(access): any {
    localStorage.setItem('token', access);
  }

  setRefreshToken(refresh): any {
    localStorage.setItem('refreshToken', refresh);
  }

  getRefreshToken(): any {
    return localStorage.getItem('refreshToken');
  }

  clear(): any {
    localStorage.clear();
  }
}
