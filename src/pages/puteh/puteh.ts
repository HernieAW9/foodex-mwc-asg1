import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PutehpixPage } from '../putehpix/putehpix';
import { PutehmenuPage } from '../putehmenu/putehmenu';

@IonicPage()
@Component({
  selector: 'page-puteh',
  templateUrl: 'puteh.html',
})
export class PutehPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutehPage');
  }

  goToPutehpix(){
    this.navCtrl.push(PutehpixPage);
  }

  goToPutehmenu(){
    this.navCtrl.push(PutehmenuPage);
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
      subTitle: 'Puteh opens as early as 6am and is a popular place for Malay comfort food such as kuih, nasi lemak and of course pulut panggang!',
      buttons: ['OK']
    });
    alert.present();
  }


}
