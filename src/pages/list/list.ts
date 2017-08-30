import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandProvider} from '../../providers/backand/backand';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [BackandProvider]
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, day: string, month: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService: BackandProvider) {
    this.loadProgramma();
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
  }

  loadProgramma() {
    this.backandService.getProgramma()
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.items.push({
            title: data.data[i].description,
            note: data.data[i].id,
            day: data.data[i].day,
            month: data.data[i].month,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
        }
      }
    );
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
