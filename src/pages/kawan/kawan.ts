import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KmenuPage } from '../kmenu/kmenu';
import { KpicPage } from '../kpic/kpic';

@IonicPage()
@Component({
  selector: 'page-kawan',
  templateUrl: 'kawan.html',
})
export class KawanPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KawanPage');
  }

  goToKawanmenu(){
    this.navCtrl.push(KmenuPage);
  }
  goToKawanpic(){
    this.navCtrl.push(KpicPage);
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
      subTitle: 'One of popular restaurant among locals.',
      buttons: ['OK']
    });
    alert.present();
  }

}
