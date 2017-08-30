import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { LotteriaPage } from '../pages/lotteria/lotteria';
import { SelfiePage } from '../pages/selfie/selfie';
import { GalleryPage } from '../pages/gallery/gallery';
import { InfoPage } from '../pages/info/info';
import { DoveSiamoPage } from '../pages/dovesiamo/dovesiamo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'calendar', title: 'Programma', component: ListPage },
      { icon: 'restaurant', title: 'Menu', component: MenuPage },
      { icon: 'trophy', title: 'Lotteria', component: LotteriaPage },
      { icon: 'camera', title: 'Selfie', component: SelfiePage },
      { icon: 'images', title: 'Galleria', component: GalleryPage },
      { icon: 'information-circle', title: 'Info', component: InfoPage },
      { icon: 'pin', title: 'Dove siamo', component: DoveSiamoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
