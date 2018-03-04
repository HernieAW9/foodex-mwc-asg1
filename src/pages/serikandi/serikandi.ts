import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkmenuPage } from '../skmenu/skmenu';


@IonicPage()
@Component({
  selector: 'page-serikandi',
  templateUrl: 'serikandi.html',
})
export class SerikandiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerikandiPage');
  }

  goToSkmenu(){
    this.navCtrl.push(SkmenuPage);
  }
}
