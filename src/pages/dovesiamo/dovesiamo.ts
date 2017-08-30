import { Component} from '@angular/core';

import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  GoogleMapsMarker,
  Geolocation
} from 'ionic-native';

import { Events } from 'ionic-angular';

@Component({
  selector: 'page-dovesiamo',
  templateUrl: 'dovesiamo.html'
})
export class DoveSiamoPage {

  private _latitude: number;
  private _longitude: number;

  constructor(private events: Events) {
  }

  ionViewWillEnter() {

    // load native maps when device is ready
    document.addEventListener('deviceready', () => {
      let map = new GoogleMap(document.getElementById('map'));

      // when the map is ready
      map.one(GoogleMapsEvent.MAP_READY).then(() => {

        this.events.subscribe('sidebar:open', () => {map.setClickable(false)});
        this.events.subscribe('sidebar:close', () => {map.setClickable(true)});

        this._latitude = 45.636023;
        this._longitude = 9.8672063;

        // move the camera
        map.moveCamera({
          target: new GoogleMapsLatLng(this._latitude, this._longitude),
          zoom: 18,
          tilt: 30
        }).then(() => {

          // add a marker
          map.addMarker({
            position: new GoogleMapsLatLng(this._latitude, this._longitude),
            title: 'Oratorio San Filippo Neri'
          }).then((marker: GoogleMapsMarker) => {
            marker.showInfoWindow();
          });

        });
      });

    });

  }

  ionViewWillLeave () {
    this.events.unsubscribe('sidebar:open');
    this.events.unsubscribe('sidebar:close');
  }

}
