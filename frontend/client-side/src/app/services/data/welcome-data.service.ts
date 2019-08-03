import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelloWorldBean } from 'src/app/models/HelloWorldBean';
import { API_URL } from 'src/app/utils/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {}

executeHelloWorldBeanService(): Observable<HelloWorldBean> {
  return this.http.get<HelloWorldBean>("${API_URL}/hello-world-bean/");
}

executeNamedHelloWorldBeanService(name: string): Observable<HelloWorldBean> {
  //const basicAuthHeaderString = this.createBasicAuthenticationHeader();
  
  /*const headers = new HttpHeaders({
    Authorization: basicAuthHeaderString
  })*/

  return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`/*, 
  {headers}*/);
}

/*createBasicAuthenticationHeader(): string {
  const username = 'demo';
  const password = 'demo';
  const basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  return basicAuthenticationHeaderString;
}*/

}
