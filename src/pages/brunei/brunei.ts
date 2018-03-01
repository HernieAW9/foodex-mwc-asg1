import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CoolPage } from '../cool/cool';
import { IdealPage } from '../ideal/ideal';

/**
 * Generated class for the BruneiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brunei',
  templateUrl: 'brunei.html',
})
export class BruneiPage {

  // items = [
  //   'Ideal Cafe & Grill',
  //   'Mamih Sg. Hanching',
  //   'Pondok Sari Wangi',
  //   'Cool Fahrenheit',
  //   'Excapade Sushi',
  // ];

  // itemSelected(item: string) {
  //   console.log("Selected Item", item);
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BruneiPage');
  }

  goToCool(){
    this.navCtrl.push(CoolPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToIdeal(){
    this.navCtrl.push(IdealPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
  

}
