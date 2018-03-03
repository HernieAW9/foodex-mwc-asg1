import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BruneiPage } from '../brunei/brunei';
import {TutongPage } from '../tutong/tutong';
<<<<<<< HEAD
import { BelaitPage } from '../belait/belait';

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
=======
import { TemburongPage } from '../temburong/temburong';
>>>>>>> 5bf5a94d0100bf96313c3f73c42df61b4bac99c5

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
  }

  goToBrunei(){
    this.navCtrl.push(BruneiPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToTutong(){
    this.navCtrl.push(TutongPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

<<<<<<< HEAD
  goToBelait(){
    this.navCtrl.push(BelaitPage);
=======
  goToTemburong(){
    this.navCtrl.push(TemburongPage);
>>>>>>> 5bf5a94d0100bf96313c3f73c42df61b4bac99c5
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
<<<<<<< HEAD
=======

>>>>>>> 5bf5a94d0100bf96313c3f73c42df61b4bac99c5
}
