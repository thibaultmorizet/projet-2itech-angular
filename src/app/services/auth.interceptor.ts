import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url !== "http://localhost:8000/authentication_token" && request.url !== "http://localhost:8000/ws/users") {
      let jeton = localStorage.getItem('jeton');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jeton}`
        }
      })
    }
    return next.handle(request);
  }
}
