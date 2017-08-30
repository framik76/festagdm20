import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {CONSTANTS} from '../../app/constants/constants';

/*
  Generated class for the DropboxProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DropboxProvider {

  accessToken: any;
  folderHistory: any = [];

  constructor(public http: Http) {
    console.log('Hello DropboxProvider Provider');
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getImages() {
    let data = {path:'/Applicazioni/FestaGdM'};
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');

    return this.http.post(CONSTANTS.DROPBOX_ENDPOINT+'/2/files/list_folder', data, {headers: headers})
    .map(function(result) {
        return result.json().entries;
    });
  }

  getImage(image) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Dropbox-API-Arg', `{"path":"${image}"}`);
    return this.http.get(`${CONSTANTS.DROPBOX_ENDPOINT}/1/media/auto?path=${image}`, {headers: headers}).map(res => {
        return res.json();
    });
  }

}
