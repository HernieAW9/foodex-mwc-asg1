import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PizzaPage } from '../pizza/pizza';
import { IdealPage } from '../ideal/ideal';
import { MauriPage } from '../mauri/mauri';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BruneiPage');
  }

  goToPizza(){
    this.navCtrl.push(PizzaPage);
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

  goToMauri(){
    this.navCtrl.push(MauriPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
  

}
