import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';
import { EditProfilePage } from '../edit-profile/edit-profile';


@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})

export class MyProfilePage {

  profileData$: Observable <any>;
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public toast: ToastController) 
    {
      this.afAuth.authState.take(1).subscribe(data => {
        this.profileData$ = this.afDatabase.object(`profile/${data.uid}`).valueChanges();;
      })
    }

    goToEditProfile(){
      this.navCtrl.push(EditProfilePage);
    }
}

