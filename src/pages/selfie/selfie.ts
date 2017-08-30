import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Camera} from 'ionic-native';

import {BackandProvider} from '../../providers/backand/backand';
import {PopoverPage} from './popover';

@Component({
  selector: 'page-list',
  templateUrl: 'selfie.html',
  providers: [BackandProvider]
})
export class SelfiePage {
  public base64Image: string;
  public canvasDom;
  public canvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService: BackandProvider, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    var self = this;
    this.canvasDom = document.getElementById("imgCanvas");
    this.canvas = this.canvasDom.getContext("2d");
    var img = new Image();
    img.src = 'assets/img/default-placeholder.png';
    img.onload = function(e) {
        self.canvasDom.width = document.documentElement.clientWidth;
        self.canvasDom.height = (img.height * document.documentElement.clientWidth) / img.width;
        self.canvas.drawImage(img, 0, 0, self.canvasDom.width, self.canvasDom.height);
    }
  }

  presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
    }

    takePicture() {
      var self = this;
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        targetWidth: 480,
        targetHeight: 640,
        saveToPhotoAlbum: true
      };
      Camera.getPicture(options).then((imageData) => {
          var watermark = new Image();
          watermark.src = "assets/img/logo.png";

          self.canvasDom = document.getElementById("imgCanvas");
          self.canvas = self.canvasDom.getContext("2d");

          var img = new Image();
          img.src = "data:image/jpeg;base64," + imageData;
          img.onload = function(e) {
              self.canvasDom.width = document.documentElement.clientWidth;
              self.canvasDom.height = (img.height * document.documentElement.clientWidth) / img.width;
              self.canvas.drawImage(img, 0, 0);
              self.canvas.drawImage(watermark, self.canvasDom.width - watermark.width, self.canvasDom.height - watermark.height);
          }
      }, (err) => {
          alert(err);
      });
    }

    selectFromGallery() {
      var self = this;
      var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 480,
            targetHeight: 640,
            saveToPhotoAlbum: false
        };
      Camera.getPicture(options).then((imageData) => {
        // this.base64Image = "data:image/jpeg;base64," + imageData;
        var watermark = new Image();
        watermark.src = "assets/img/logo.png";

        self.canvasDom = document.getElementById("imgCanvas");
        self.canvas = self.canvasDom.getContext("2d");

        var img = new Image();
        img.src = "data:image/jpeg;base64," + imageData;
        img.onload = function(e) {
            self.canvasDom.width = document.documentElement.clientWidth;
            self.canvasDom.height = (img.height * document.documentElement.clientWidth) / img.width;
            self.canvas.drawImage(img, 0, 0);
            self.canvas.drawImage(watermark, self.canvasDom.width - watermark.width, self.canvasDom.height - watermark.height);
        }
      }, (err) => {
        alert(err);
      });
    }

}
