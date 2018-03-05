import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {

  redeemOpen: boolean;
  redeemResult;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPage');
  }

  showQR() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Open in',
      buttons: [
        {
          text: 'Map',
          role: 'map',
          handler: () => {
            console.log('Map clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
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
