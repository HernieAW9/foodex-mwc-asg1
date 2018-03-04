import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { BeanarymenulistPage } from '../beanarymenulist/beanarymenulist';
import { BeanarypicPage } from '../beanarypic/beanarypic';


@IonicPage()
@Component({
  selector: 'page-beanary',
  templateUrl: 'beanary.html',
})
export class BeanaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeanaryPage');
  }
  goToBeanarymenulist(){
    this.navCtrl.push(BeanarymenulistPage);
  }

  goToBeanarypic(){
    this.navCtrl.push(BeanarypicPage);
  }
  
}
