import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NtkpixPage } from '../ntkpix/ntkpix';
import { NtkmenuPage } from '../ntkmenu/ntkmenu';

@IonicPage()
@Component({
  selector: 'page-ntk',
  templateUrl: 'ntk.html',
})
export class NtkPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NtkPage');
  }

  goToNtkpix(){
    this.navCtrl.push(NtkpixPage);
  }

  goToNtkmenu(){
    this.navCtrl.push(NtkmenuPage);
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
      subTitle: 'New upscale local eateries. A hybrid between coffee shop & restaurant. Suitable for everybody. Plenty of cakes supplied by reputable bakery to choose. Their famous dish “$2.50 Kolomee” among locals is a must try.',
      buttons: ['OK']
    });
    alert.present();
  }

}
