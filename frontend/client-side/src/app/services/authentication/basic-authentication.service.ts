import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationBean } from 'src/app/models/AuthenticationBean';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/utils/app.constants';

export const USER_TOKEN = 'usertoken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  
  constructor(private http: HttpClient) { }

  /*authenticate = function(username: string, password: string): boolean {
    if (username != '' && password != '') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else return false;    
  }*/

  executeAuthenticationService(username: string, password: string): Observable<AuthenticationBean> {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });


    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, 
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(USER_TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    )
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(USER_TOKEN);
    }
  }

  isUserLogedIn = function(): boolean {
    let sessionUser = sessionStorage.getItem(AUTHENTICATED_USER);
    return sessionUser !== null;
  }

  logout = function() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(USER_TOKEN);
  }

}
