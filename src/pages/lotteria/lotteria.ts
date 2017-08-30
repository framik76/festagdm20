import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandProvider} from '../../providers/backand/backand';

@Component({
  selector: 'page-list',
  templateUrl: 'lotteria.html',
  providers: [BackandProvider]
})
export class LotteriaPage {
  selectedItem: any;
  icons: string[];
  items: Array<{id: string, description: string, offeredBy: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService: BackandProvider) {
    this.loadLotteria();
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
  }

  loadLotteria() {
    this.backandService.getLotteria()
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.items.push({
            description: data.data[i].description,
            id: data.data[i].id,
            offeredBy: data.data[i].offeredBy
          });
        }
      }
    );
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LotteriaPage, {
      item: item
    });
  }
}
