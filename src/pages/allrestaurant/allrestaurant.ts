import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SortPage } from '../sort/sort';
import { FilterPage } from '../filter/filter';
import { PizzaPage } from '../pizza/pizza';
import { IdealPage } from '../ideal/ideal';

@IonicPage()
@Component({
  selector: 'page-allrestaurant',
  templateUrl: 'allrestaurant.html',
})
export class AllrestaurantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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

  goToPizza(){
    this.navCtrl.push(PizzaPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToIdeal(){
    this.navCtrl.push(IdealPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
