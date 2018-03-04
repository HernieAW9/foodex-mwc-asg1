import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LandingPage } from '../landing/landing';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  }
  
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage, { email: this.loginData.email});
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      this.navCtrl.setRoot(HomePage);
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }

  goToLanding() {
    this.navCtrl.push(LandingPage);
  }

  forgot() {
    this.navCtrl.push(ResetPasswordPage);
  }

}
