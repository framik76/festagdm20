import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandProvider} from '../../providers/backand/backand';

@Component({
  selector: 'page-list',
  templateUrl: 'info.html',
  providers: [BackandProvider]
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService: BackandProvider) {

  }

}
