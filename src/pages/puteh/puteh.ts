import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PutehpixPage } from '../putehpix/putehpix';
import { PutehmenuPage } from '../putehmenu/putehmenu';

/**
 * Generated class for the PutehPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puteh',
  templateUrl: 'puteh.html',
})
export class PutehPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutehPage');
  }

  goToPutehpix(){
    this.navCtrl.push(PutehpixPage);
  }

  goToPutehmenu(){
    this.navCtrl.push(PutehmenuPage);
  }


}
