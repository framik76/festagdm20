import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackandProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BackandProvider {
  auth_token: {header_name: string, header_value: string} = {header_name: 'AnonymousToken', header_value: '7c321157-14ad-4f78-ad3d-5c617722f1b3'};
  api_url: string = 'https://api.backand.com';
  app_name: string = 'festagdm';

  constructor(public http: Http) {}

  private authHeader() {
    var authHeader = new Headers();
    authHeader.append(this.auth_token.header_name, this.auth_token.header_value);
    return authHeader;
    }

 getProgramma() {
    return this.http.get(this.api_url + '/1/objects/programma?returnObject=true&pageSize=40&pageNumber=1', {
       headers: this.authHeader()
      })
      .map(res => res.json())
 }

 getMenu(category) {
    return this.http.get(this.api_url + '/1/objects/menu?returnObject=true&pageSize=40&pageNumber=1', {
        params: {
          filter: [
            {
              fieldName: 'category',
              operator: 'equals',
              value: category
            }
          ]
      },
       headers: this.authHeader(),
      })
      .map(res => res.json())
 }

 getLotteria() {
    return this.http.get(this.api_url + '/1/objects/lotteria?returnObject=true&pageSize=40&pageNumber=1', {
       headers: this.authHeader()
      })
      .map(res => res.json())
 }

 public addTodo(name: string) {
  let data = JSON.stringify({name: name});

  return this.http.post(this.api_url + '/1/objects/todos?returnObject=true', data,
  {
    headers: this.authHeader()
  })
  .map(res => {
    return res.json();
  });
}

public removeTodo(id: string) {
  return this.http.delete(this.api_url + '/1/objects/todos/' + id,
  {
    headers: this.authHeader()
  })
  .map(res => {
    return res.json();
  });
}

}
