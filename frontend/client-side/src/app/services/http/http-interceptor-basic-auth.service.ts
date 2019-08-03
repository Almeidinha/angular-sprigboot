import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../authentication/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //const basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const userToken = this.basicAuthService.getAuthenticatedToken();
    
    if (userToken) {
      request = request.clone({
        setHeaders : {
            Authorization : userToken
        }
      })
    }

    return next.handle(request);
  }

}
