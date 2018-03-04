import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  public fireAuth: any;
  public userData: any;

  constructor() {
  this.fireAuth = firebase.auth();
  this.userData = firebase.database().ref('/userData');
}

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }
  

}
