import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { LandingPage } from '../landing/landing';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goToHome() {
    this.navCtrl.push(HomePage);
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }

  goToLanding() {
    this.navCtrl.push(LandingPage);
  }

}
