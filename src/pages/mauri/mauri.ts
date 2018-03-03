import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MauripixPage } from '../mauripix/mauripix';

/**
 * Generated class for the MauriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mauri',
  templateUrl: 'mauri.html',
})
export class MauriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MauriPage');
  }

  goToMauripix(){
    this.navCtrl.push(MauripixPage);
  }


}
