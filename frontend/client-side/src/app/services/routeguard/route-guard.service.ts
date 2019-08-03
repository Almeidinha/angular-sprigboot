import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../authentication/hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {

  constructor(private auth: HardcodedAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLogedIn()) {
      return true;
    } else {
      this.router.navigate(['login', {loginErrorMessage: 'You are not Loged in!'}] );
      return false;
    }
  }

}
