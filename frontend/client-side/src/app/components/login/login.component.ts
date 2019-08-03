import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HardcodedAuthenticationService } from 'src/app/services/authentication/hardcoded-authentication.service';
import { BasicAuthenticationService } from 'src/app/services/authentication/basic-authentication.service';
import { AuthenticationBean } from 'src/app/models/AuthenticationBean';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = 'Almeida';
  password: string = '';
  errorMessage: string;
  invalidLogin: boolean = false;
  loginErrorMessage: string = null;
  //paramsSubscription : Subscription;
  private _invalidLogin = new Subject<string>();
  
  constructor(
    private router: Router, 
    private authentication: HardcodedAuthenticationService, 
    private activatedRoute: ActivatedRoute,
    private basicAuthService: BasicAuthenticationService) { 
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramns => {
      if(paramns.has('loginErrorMessage')) {
        this.loginErrorMessage = paramns.get('loginErrorMessage');
      } 
    });

    this._invalidLogin.subscribe((message) => this.errorMessage = message);
    this._invalidLogin.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = null);
  }

  handleLogin = function(): void {
    if (this.authentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this._invalidLogin.next('Invalid Credentials');
    }
  }

  handleBasicAuthLogin = function(): void {
    this.basicAuthService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data: AuthenticationBean) => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        (error: any) => {
          console.log(error);
          this._invalidLogin.next('Invalid Credentials');
        }
    );
  }

}