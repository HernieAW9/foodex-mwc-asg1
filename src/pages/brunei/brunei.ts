import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoolPage } from '../cool/cool';

/**
 * Generated class for the BruneiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brunei',
  templateUrl: 'brunei.html',
})
export class BruneiPage {

  items = [
    'Ideal Cafe & Grill',
    'Mamih Sg. Hanching',
    'Pondok Sari Wangi',
    'Cool Fahrenheit',
    'Excapade Sushi',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BruneiPage');
  }

  goToCool(){
    this.navCtrl.push(CoolPage);
  }

}
