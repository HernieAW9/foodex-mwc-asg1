import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NtkpixPage } from '../ntkpix/ntkpix';
import { NtkmenuPage } from '../ntkmenu/ntkmenu';

@IonicPage()
@Component({
  selector: 'page-ntk',
  templateUrl: 'ntk.html',
})
export class NtkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NtkPage');
  }

  goToNtkpix(){
    this.navCtrl.push(NtkpixPage);
  }

  goToNtkmenu(){
    this.navCtrl.push(NtkmenuPage);
  }

}
