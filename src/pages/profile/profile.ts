import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';
import { RewardPage } from '../reward/reward';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goToMyProfile() {
    this.navCtrl.push(MyProfilePage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToReward(){
    this.navCtrl.push(RewardPage);
  }

}
