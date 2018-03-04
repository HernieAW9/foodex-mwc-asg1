import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KmenuPage } from '../kmenu/kmenu';
import { KpicPage } from '../kpic/kpic';

@IonicPage()
@Component({
  selector: 'page-kawan',
  templateUrl: 'kawan.html',
})
export class KawanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
