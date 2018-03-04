import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SortPage } from '../sort/sort';
import { FilterPage } from '../filter/filter';
import { PizzaPage } from '../pizza/pizza';
import { IdealPage } from '../ideal/ideal';
import { MauriPage } from '../mauri/mauri';
import { MeifangPage } from '../meifang/meifang';
import { PutehPage } from '../puteh/puteh';
import { SerikandiPage } from '../serikandi/serikandi';
import { BeanaryPage } from '../beanary/beanary';
import { KawanPage } from '../kawan/kawan';
import { NtkPage } from '../ntk/ntk';

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

  goToMauri() {
    this.navCtrl.push(MauriPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToMeifang() {
    this.navCtrl.push(MeifangPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToPuteh() {
    this.navCtrl.push(PutehPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToSerikandi(){
    this.navCtrl.push(SerikandiPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToBeanary() {
    this.navCtrl.push(BeanaryPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToKawan() {
    this.navCtrl.push(KawanPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  goToNTK() {
    this.navCtrl.push(NtkPage);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
