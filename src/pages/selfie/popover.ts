import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';

@Component({
  template: `
    <ion-list>
      <ion-list-header color="light">Condividi</ion-list-header>
      <button ion-item (click)="share('facebook')">
        <ion-icon name="logo-facebook"></ion-icon> Facebook
      </button>
      <button ion-item (click)="share('twitter')">
        <ion-icon name="logo-twitter"></ion-icon> Twitter
      </button>
      <button ion-item (click)="share('instagram')">
        <ion-icon name="logo-instagram"></ion-icon> Instagram
      </button>
      <button ion-item (click)="share('whatsapp')">
        <ion-icon name="logo-whatsapp"></ion-icon> Whatsapp
      </button>
      <button ion-item (click)="share('email')">
      <ion-icon ios="ios-mail" md="md-mail"></ion-icon> Email
      </button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, private sharingCtrl: SocialSharing) {}

  close() {
    this.viewCtrl.dismiss();
  }

  share(type) {
  let canvas = document.getElementById('imgCanvas') as HTMLCanvasElement;
  if (type == "facebook") {
        this.sharingCtrl.shareViaFacebookWithPasteMessageHint('#festagdm', canvas.toDataURL(), null, '').then(function(result) {
          alert('success');
        }, function(err) {
            alert('failed');
        });
    } else if (type == "twitter") {
        this.sharingCtrl.shareViaTwitter('', canvas.toDataURL(), '')
          .then(function(result) {
            // Success!
          }, function(err) {
            // An error occurred. Show a message to the user
          });
    } else if (type == "instagram") {
        this.sharingCtrl.shareViaInstagram('#instantselfie #festagdm', canvas.toDataURL())
          .then(function(result) {
            alert('success');
          }, function(err) {
            // An error occurred. Show a message to the user
            alert('failed');
          });
    } else if (type == "whatsapp") {
        this.sharingCtrl.shareViaWhatsApp('', canvas.toDataURL(), '')
          .then(function(result) {
            // Success!
          }, function(err) {
            // An error occurred. Show a message to the user
          });
    } else if (type == "email") {
        this.sharingCtrl.share('', canvas.toDataURL(), '')
          .then(function(result) {
            // Success!
          }, function(err) {
            // An error occurred. Show a message to the user
          });
    }
  }
}
