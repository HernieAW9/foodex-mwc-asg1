import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { A9Page } from '../a9/a9';
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

  goToA9(){
    this.navCtrl.push(A9Page);
  }

  goToKawan() {
    this.navCtrl.push(KawanPage);
  }

  goToNTK(){
    this.navCtrl.push(NtkPage);
  }

}
