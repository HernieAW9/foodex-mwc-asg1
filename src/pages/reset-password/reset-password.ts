import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetpwdForm;
  emailChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController, public authService: AngularFireAuthModule, public navParams: NavParams, public formBuilder: FormBuilder,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.resetpwdForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])]
    });
  }

  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  // resetPwd() {
  //   if (!this.resetpwdForm.valid){
  //     console.log(this.resetpwdForm.value);
  //   } else {
  //     this.authService.resetPassword(this.resetpwdForm.value.email).then( authService => {
  //       this.navCtrl.setRoot(HomePage);
  //     }, error => {
  //       this.loading.dismiss().then( () => {
  //         let alert = this.alertCtrl.create({
  //           message: error.message,
  //           buttons: [
  //             {
  //               text: "Ok",
  //               role: 'cancel'
  //             }
  //           ]
  //         });
  //         alert.present();
  //       });
  //     });

  //     this.loading = this.loadingCtrl.create({
  //       dismissOnPageChange: true,
  //     });
  //     this.loading.present();
  //   }
  // }

}
