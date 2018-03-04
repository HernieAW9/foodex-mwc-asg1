import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { BeanarymenulistPage } from '../beanarymenulist/beanarymenulist';
import { BeanarypicPage } from '../beanarypic/beanarypic';


@IonicPage()
@Component({
  selector: 'page-beanary',
  templateUrl: 'beanary.html',
})
export class BeanaryPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeanaryPage');
  }
  goToBeanarymenulist(){
    this.navCtrl.push(BeanarymenulistPage);
  }

  goToBeanarypic(){
    this.navCtrl.push(BeanarypicPage);
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
      subTitle: ' Beanery & Co. is a cafe in the heart of Kuala Belait, Brunei. Warm and welcoming ambience to enjoy a cuppa with your loved ones.',
      buttons: ['OK']
    });
    alert.present();
  }
  
}
