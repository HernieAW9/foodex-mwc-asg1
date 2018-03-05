import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ProfilePage } from '../profile/profile';
import { PizzaPage } from '../pizza/pizza';
import { BeanaryPage } from '../beanary/beanary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  @ViewChild('slides') slides: Slides;
  
    constructor(public navCtrl: NavController) {
  }

  goToMenu(){
    this.navCtrl.push(MenuPage);
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  pizzahut(){
    this.navCtrl.push(PizzaPage);
  }

  beanery(){
    this.navCtrl.push(BeanaryPage);
  }

}

