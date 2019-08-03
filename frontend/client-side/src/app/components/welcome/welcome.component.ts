import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome message...';
  welcomeMessage: string;
  name: string;


  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.executeNamedHelloWorldBeanService(this.name).subscribe(
      response => this.welcomeMessage = response.message,
      error => console.log(error.error.message)
    );
  }

}
