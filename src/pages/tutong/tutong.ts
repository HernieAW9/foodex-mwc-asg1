import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MeifangPage } from '../meifang/meifang';
import { PutehPage } from '../puteh/puteh';


/**
 * Generated class for the TutongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutong',
  templateUrl: 'tutong.html',
})
export class TutongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutongPage');
  }

  goToMeifang(){
    this.navCtrl.push(MeifangPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToPuteh(){
    this.navCtrl.push(PutehPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
