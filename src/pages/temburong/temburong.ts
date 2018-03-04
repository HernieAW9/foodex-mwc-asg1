import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KawanPage } from '../kawan/kawan';
import { NtkPage } from '../ntk/ntk';


@IonicPage()
@Component({
  selector: 'page-temburong',
  templateUrl: 'temburong.html',
})
export class TemburongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemburongPage');
  }

  goToKawan() {
    this.navCtrl.push(KawanPage);
  }

  goToNTK(){
    this.navCtrl.push(NtkPage);
  }

}
