import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BeanaryPage } from '../beanary/beanary';

/**
 * Generated class for the BelaitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-belait',
  templateUrl: 'belait.html',
})
export class BelaitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BelaitPage');
  }

  goToBeanary(){
    this.navCtrl.push(BeanaryPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
