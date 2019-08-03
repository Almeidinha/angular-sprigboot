import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  
  constructor() { }

  authenticate = function(username: string, password: string): boolean {
    if (username != '' && password != '') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else return false;    
  }

  isUserLogedIn = function(): boolean {
    let sessionUser = sessionStorage.getItem('authenticatedUser');
    return sessionUser !== null;
  }

  logout = function() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
