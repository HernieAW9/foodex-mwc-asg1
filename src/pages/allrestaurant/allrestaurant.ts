import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SortPage } from '../sort/sort';
import { FilterPage } from '../filter/filter';

/**
 * Generated class for the AllrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allrestaurant',
  templateUrl: 'allrestaurant.html',
})
export class AllrestaurantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllrestaurantPage');
  }

  SortPage(){
    this.navCtrl.push(SortPage);
  }

  FilterPage(){
    this.navCtrl.push(FilterPage);
  }

}
