import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToLanding() {
    this.navCtrl.push(HomePage);
  }

  async register(user: User) {
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
  }
    catch(e) {
      console.error(e)
    }
  }

}
