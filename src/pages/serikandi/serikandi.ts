import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SkmenuPage } from '../skmenu/skmenu';
import { SkpicPage } from '../skpic/skpic';


@IonicPage()
@Component({
  selector: 'page-serikandi',
  templateUrl: 'serikandi.html',
})
export class SerikandiPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerikandiPage');
  }

  goToSkmenu(){
    this.navCtrl.push(SkmenuPage);
  }

  goToSkpic(){
    this.navCtrl.push(SkpicPage);
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
      subTitle: '"Caters for Every Taste" - Leading Catering Organisation in Brunei, Member of Serikandi Group.',
      buttons: ['OK']
    });
    alert.present();
  }
}
