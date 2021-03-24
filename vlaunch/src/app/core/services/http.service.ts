import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private DOMAIN = environment.API_DOMAIN; // config in environment file

  private getHttpOptions() {
    var headers = new HttpHeaders();
    var token = localStorage.getItem('token');
    if (token != null) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    return {
      headers,
    };
  }

  handleError<T>() {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(null);
    };
  }

  get(url): Observable<any> {
    var options = this.getHttpOptions();
    return this.http
      .get(this.DOMAIN + url, options)
      .pipe(catchError(this.handleError()));
  }

  post(url, data?): Observable<any> {
    var options = this.getHttpOptions();
    return this.http
      .post(this.DOMAIN + url, data, options)
      .pipe(catchError(this.handleError()));
  }

  put(url, data?): Observable<any> {
    var options = this.getHttpOptions();
    return this.http
      .put(this.DOMAIN + url, data, options)
      .pipe(catchError(this.handleError()));
  }

  delete(url): Observable<any> {
    var options = this.getHttpOptions();
    return this.http
      .delete(this.DOMAIN + url, options)
      .pipe(catchError(this.handleError()));
  }
}
