import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IdealpixPage } from '../idealpix/idealpix';
import { IdealmenuPage } from '../idealmenu/idealmenu';

@IonicPage()
@Component({
  selector: 'page-ideal',
  templateUrl: 'ideal.html',
})
export class IdealPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdealPage');
  }

  goToImagesideal(){
    this.navCtrl.push(IdealpixPage);
  }

  goToIdealmenu(){
    this.navCtrl.push(IdealmenuPage);
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
      subTitle: 'Brunei first homegrown quick service restaurant chain born from a vision of catering to the changing demands of today lifestyle without compromising the quality of a traditional home-cooked halal meals.',
      buttons: ['OK']
    });
    alert.present();
  }

}
