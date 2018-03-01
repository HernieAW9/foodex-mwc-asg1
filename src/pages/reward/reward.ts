import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {

  redeemOpen: boolean;
  redeemResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPage');
  }

  showQR() {
    let confirm = this.alertCtrl.create({
      title: 'Open Scanner?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showRedeem() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Redeem option');

    alert.addInput({
      type: 'radio',
      label: '160 points: Discount 5%',
      value: 'disc',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: '300 points: Voucher $10 off',
      value: 'voucher',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.redeemOpen = false;
        this.redeemResult = data;
      }
    });
    alert.present();
  }

}
