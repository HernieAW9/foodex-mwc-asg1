import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdealpixPage } from '../idealpix/idealpix';

/**
 * Generated class for the IdealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ideal',
  templateUrl: 'ideal.html',
})
export class IdealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdealPage');
  }

  goToImagesideal(){
    this.navCtrl.push(IdealpixPage);
  }

}
