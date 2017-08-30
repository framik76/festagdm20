import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule, Events } from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { LotteriaPage } from '../pages/lotteria/lotteria';
import { SelfiePage } from '../pages/selfie/selfie';
import { PopoverPage } from '../pages/selfie/popover';
import { GalleryPage } from '../pages/gallery/gallery';
import { InfoPage } from '../pages/info/info';
import { DoveSiamoPage } from '../pages/dovesiamo/dovesiamo';
import { SponsorPage } from '../pages/sponsor/sponsor';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackandProvider } from '../providers/backand/backand';
import { DropboxProvider } from '../providers/dropbox/dropbox';
import {GoogleMaps} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    LotteriaPage,
    SelfiePage,
    GalleryPage,
    InfoPage,
    DoveSiamoPage,
    SponsorPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    LotteriaPage,
    SelfiePage,
    GalleryPage,
    InfoPage,
    DoveSiamoPage,
    SponsorPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackandProvider,
    SocialSharing,
    DropboxProvider,
    GoogleMaps
  ]
})
export class AppModule {

  constructor (private events: Events) {

  }

  onMenuOpen (event) {
    this.events.publish("sidebar:open");
  }

  onMenuClose (event) {
    this.events.publish("sidebar:close");
  }

}
