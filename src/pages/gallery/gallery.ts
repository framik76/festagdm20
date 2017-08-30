import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { BackandProvider } from '../../providers/backand/backand';
import { DropboxProvider } from '../../providers/dropbox/dropbox';

@Component({
  selector: 'page-list',
  templateUrl: 'gallery.html',
  providers: [BackandProvider, DropboxProvider]
})
export class GalleryPage {

  images: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService: BackandProvider, public dropbox: DropboxProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
      this.dropbox.setAccessToken("R2P9Nvoj8AIAAAAAAAAIf_Oa8CVlhZVwAn1BWlsIG9Kq8ufZRDnPmc_FBBDQYHTr");

      let loading = this.loadingCtrl.create({
        content: 'Caricamento...'
      });

      loading.present();

      this.dropbox.getImages().subscribe(imagesData => {
        this.images = [];
        for (var i = 0; i < imagesData.length; i++) {
            this.dropbox.getImage(imagesData[i].path_display).subscribe(res => {
                  if (this.images.indexOf(res.url) < 0) {
                      this.images.push(res.url);
                  }
                }
            );
        }
        loading.dismiss();
      }, (err) => {
        console.log(err);
      });

  }

}
