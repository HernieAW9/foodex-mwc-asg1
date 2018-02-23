import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    constructor(public navCtrl: NavController) {
  }

  goToMenu(){
    this.navCtrl.push(MenuPage);
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
}

