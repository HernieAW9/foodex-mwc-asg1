import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToLanding() {
    this.navCtrl.push(LandingPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
    this.loadingCtrl.create({
      content: 'Loading...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }

}
