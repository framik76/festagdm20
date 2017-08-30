import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandProvider} from '../../providers/backand/backand';

@Component({
  selector: 'menu-list',
  templateUrl: 'menu.html',
  providers: [BackandProvider]
})
export class MenuPage {
  selectedItem: any;
  icons: string[];
  primi: Array<{title: string, price: string}>;
  secondiCaldi: Array<{title: string, price: string}>;
  secondiFreddi: Array<{title: string, price: string}>;
  contorni: Array<{title: string, price: string}>;
  formaggi: Array<{title: string, price: string}>;
  dolci: Array<{title: string, price: string}>;
  pizze: Array<{title: string, price: string}>;
  bevande: Array<{title: string, price: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService: BackandProvider) {
    this.loadMenu();
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.primi = [];
    this.secondiCaldi = [];
    this.secondiFreddi = [];
    this.contorni = [];
    this.formaggi = [];
    this.dolci = [];
    this.pizze = [];
    this.bevande = [];
  }

  loadMenu() {
    this.backandService.getMenu('primi piatti')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.primi.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('secondi piatti caldi')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.secondiCaldi.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('secondi piatti freddi')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.secondiFreddi.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('contorni')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.contorni.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('formaggi')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.formaggi.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('dolci')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.dolci.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('pizze')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.pizze.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );
    this.backandService.getMenu('bevande')
    .subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          this.bevande.push({
            title: data.data[i].title,
            price: data.data[i].price
          });
        }
      }
    );

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MenuPage, {
      item: item
    });
  }
}
