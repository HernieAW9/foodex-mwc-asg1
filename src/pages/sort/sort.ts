import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllrestaurantPage } from '../allrestaurant/allrestaurant';


@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortPage');
  }

  AllrestaurantPage() {
    this.navCtrl.push(AllrestaurantPage);
  }
}
