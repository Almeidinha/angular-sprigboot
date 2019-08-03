import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../../services/authentication/hardcoded-authentication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userIsLogedIn: boolean = false;

  constructor(private auth: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.userIsLogedIn = this.auth.isUserLogedIn();
  }

}
