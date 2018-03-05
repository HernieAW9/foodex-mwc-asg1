import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MauripixPage } from '../mauripix/mauripix';
import { MaurimenuPage } from '../maurimenu/maurimenu';

@IonicPage()
@Component({
  selector: 'page-mauri',
  templateUrl: 'mauri.html',
})
export class MauriPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MauriPage');
  }

  goToMauripix(){
    this.navCtrl.push(MauripixPage);
  }

goToMaurimenu(){
    this.navCtrl.push(MaurimenuPage);
  }

  favThis() {
    let alert = this.alertCtrl.create({
      title: 'Favorite!',
      subTitle: 'You favorited this restaurant!',
      buttons: ['OK']
    });
    alert.present();
  }

  bookmarkThis() {
    let alert = this.alertCtrl.create({
      title: 'Bookmarked!',
      subTitle: 'You bookmarked this restaurant!',
      buttons: ['OK']
    });
    alert.present();
  }

  imHere() {
    let alert = this.alertCtrl.create({
      title: 'I am Here!',
      subTitle: 'You are currently in this restaurant.',
      buttons: ['OK']
    });
    alert.present();
  }

  info() {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: 'Chef Mauri Group of Restaurants is the 3-strong, Brunei’s leading & best loved Italian Restaurant Group, whereby today employing over 60 people & operating as privately-owned, family- run company.',
      buttons: ['OK']
    });
    alert.present();
  }


}
