import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MeifangpixPage } from '../meifangpix/meifangpix';
import { MeifangmenuPage } from '../meifangmenu/meifangmenu';

@IonicPage()
@Component({
  selector: 'page-meifang',
  templateUrl: 'meifang.html',
})
export class MeifangPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeifangPage');
  }

  goToMeifangpix(){
    this.navCtrl.push(MeifangpixPage);
  }

  goToMeifangmenu(){
    this.navCtrl.push(MeifangmenuPage);
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
      subTitle: 'Mei Fang has been around since the 1950s as a Tutong kopitiam opposite the river, selling their famous Tutong Pulut Panggang and stir fried noodles.',
      buttons: ['OK']
    });
    alert.present();
  }

}
