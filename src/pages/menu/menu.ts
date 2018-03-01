import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { NearbyPage } from '../nearby/nearby';
import { AllrestaurantPage } from '../allrestaurant/allrestaurant';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goToSetting(){
    this.navCtrl.push(SettingPage);
  }

  goToNearby(){
    this.navCtrl.push(NearbyPage);
  }

  goToAll(){
    this.navCtrl.push(AllrestaurantPage);
  }

  goToSearch() {
    this.navCtrl.push(SearchPage);
  }

}
