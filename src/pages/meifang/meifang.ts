import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeifangpixPage } from '../meifangpix/meifangpix';
import { MeifangmenuPage } from '../meifangmenu/meifangmenu';

/**
 * Generated class for the MeifangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meifang',
  templateUrl: 'meifang.html',
})
export class MeifangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
