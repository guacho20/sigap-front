import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'ngprime-core';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private authSvc: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authSvc.getToken() || '';
    const body = {
      ide_segemp: localStorage.getItem('ide_segemp') || null,
      ide_segsuc: localStorage.getItem('ide_segsuc') || null,
      ide_segusu: localStorage.getItem('ide_segusu') || null,
      usuario: localStorage.getItem('username') || null
    };
    const reqClone = request.clone({
      setHeaders: {
        'x-token': token,
      },
      body: { ...request.body, ...body }
    });
    return next.handle(reqClone);
  }
}
