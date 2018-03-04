import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdealpixPage } from '../idealpix/idealpix';
import { IdealmenuPage } from '../idealmenu/idealmenu';

@IonicPage()
@Component({
  selector: 'page-ideal',
  templateUrl: 'ideal.html',
})
export class IdealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
