import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoolpixPage } from '../coolpix/coolpix';
import { MenulistPage } from '../menulist/menulist';

/**
 * Generated class for the CoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cool',
  templateUrl: 'cool.html',
})
export class CoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoolPage');
  }

  goToImages(){
    this.navCtrl.push(CoolpixPage);
  }

  goToMenulist(){
    this.navCtrl.push(MenulistPage);
  }
}
