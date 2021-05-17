import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {TokenService} from './token.service';
import {SnackbarModifyService} from './snackbar-modify.service';
import {Result} from '../../models/result';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private  tokenService: TokenService, private  snackbarModifyService: SnackbarModifyService) {}

  private DOMAIN = environment.API_DOMAIN; // config in environment file

  // private getHttpOptions() {
  //   var headers = new HttpHeaders();
  //   var token = localStorage.getItem('token');
  //   if (token != null) {
  //     headers = headers.append('Authorization', 'Bearer ' + token);
  //   }
  //   return {
  //     headers,
  //   };
  // }

  private getHttpOptions(): any {
    let headers = new HttpHeaders();
    const token = this.tokenService.getToken();
    if (!(token == null)) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    headers.append('observe', 'response');
    return {
      headers,
    };
  }

  handleError<T>(): any {
    return (error: any): Observable<any> => {
      console.error(error);
      if (error.name === 'TimeoutError') {
        return of({
          error_code: 'time_out',
          error_message:
            'Kết nối mạng không ổn định, vui lòng kiểm tra lại đường truyền.',
          success: false,
        });
      }

      return of(null);
    };
  }
  refreshTokenModify(): any {
    const options = this.getHttpOptions();
    const url = 'UserAuth/refresh';
    return this.postHandle(this.DOMAIN + url, {refresh: this.tokenService.getRefreshToken()});

  }

  putHandle(url: string, data?: any): Observable<any>{
    return this.requestModify(Method.put, url, data);
  }
  getHandle(url: string, data?: any): Observable<any>{
    return this.requestModify(Method.get, url, data);
  }
  postHandle(url: string, data?: any): Observable<any>{
    return this.requestModify(Method.post, url, data);
  }
  deleteHandle(url: string, data?: any): Observable<any>{
    return this.requestModify(Method.delete, url, data);
  }

  requestModify(method: Method, url: string, data?: any): Observable<any> {
    const options = this.getHttpOptions();
    let response: Observable<any>;

    switch (method) {
      case Method.get:
        response = this.http
          .get(this.DOMAIN + url, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.getHandle(url, data))));
        break;
      case Method.post:
        response = this.http
          .post(this.DOMAIN + url, data, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.postHandle(url, data))));
        break;
      case Method.put:
        response = this.http
          .put(this.DOMAIN + url, data, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.putHandle(url, data))));
        break;
      case Method.delete:
        response = this.http
          .delete(this.DOMAIN + url, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.deleteHandle(url, data))));
        break;
    }
    return response;
  }
  private processError(callback?: any): any {
    return async (error: any): Promise<any> => {
      console.log(error);
      if (error.status === 0){
        this.snackbarModifyService.openMessage(new Result('Mạng không ổn định, xin vui lòng kiểm tra lại đường truyền.'));
        return {
          error_message: 'Mạng không ổn định, xin vui lòng kiểm tra lại đường truyền.',
        };
      }
      if (error.status === 500){
        return {error_message: 'Lỗi server'};
      }
      if (error.status === 403){
        return {
          error_message: 'Bạn cần quyền Admin để truy cập tài nguyên này!'
        };
      }
      if (error.status === 404){
        return {error_message: 'Không tìm thấy tài nguyên này'};
      }
      if (error.status === 401 && (!this.tokenService.getRefreshToken() || this.tokenService.getRefreshToken() === '')) {
        return {
          error_code: 'token_not_valid',
          error_message: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại.',
        };
      }
      if (error.status === 401 ){
        const result = await this.refreshTokenModify().toPromise();
        this.tokenService.clear();
        if (result.data.access){
          console.log(result);
          this.tokenService.setToken(result.data.access);
          this.tokenService.setRefreshToken(result.data.refresh);
          return await callback().toPromise();
        }else {
          return {
            error_code: 'token_not_valid',
            error_message: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại.',
          };
        }
      }

    };
  }
}
enum Method{
  get,
  post,
  put,
  delete
}

