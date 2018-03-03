import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from "../pages/landing/landing";
import { MenuPage } from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile';
import { SettingPage } from '../pages/setting/setting';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NearbyPage } from '../pages/nearby/nearby';
import { BruneiPage } from '../pages/brunei/brunei';
import { SortPage } from '../pages/sort/sort';
import { AllrestaurantPage } from '../pages/allrestaurant/allrestaurant';
import { FilterPage } from '../pages/filter/filter';
import { CoolpixPage } from '../pages/coolpix/coolpix';
import { MenulistPage } from '../pages/menulist/menulist';
import { RewardPage } from '../pages/reward/reward';
import { IdealPage } from '../pages/ideal/ideal';
import { SearchPage } from '../pages/search/search';
import { PizzaPage } from '../pages/pizza/pizza';
import { IdealpixPage } from '../pages/idealpix/idealpix';
import { IdealmenuPage } from '../pages/idealmenu/idealmenu';
import {TutongPage } from '../pages/tutong/tutong';
import { TemburongPage } from '../pages/temburong/temburong';
import { A9Page } from '../pages/a9/a9';
import { KawanPage } from '../pages/kawan/kawan';
import { NtkPage } from '../pages/ntk/ntk';
import { MauriPage } from '../pages/mauri/mauri';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    MenuPage,
    ProfilePage,
    SettingPage,
    MyProfilePage,
    LoginPage,
    RegisterPage,
    NearbyPage,
    BruneiPage,
    PizzaPage,
    AllrestaurantPage,
    SortPage,
    FilterPage,
    CoolpixPage,
    MenulistPage,
    RewardPage,
    IdealPage,
    IdealpixPage,
    IdealmenuPage,
    SearchPage,
    TutongPage,
    TemburongPage,
    A9Page,
    KawanPage,
    NtkPage,
    MauriPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    MenuPage,
    ProfilePage,
    SettingPage,
    MyProfilePage,
    LoginPage,
    RegisterPage,
    NearbyPage,
    BruneiPage,
    PizzaPage,
    AllrestaurantPage,
    SortPage,
    FilterPage,
    CoolpixPage,
    MenulistPage,
    RewardPage,
    IdealPage,
    IdealpixPage,
    IdealmenuPage,
    SearchPage,
    TutongPage,
    TemburongPage,
    A9Page,
    KawanPage,
    NtkPage,
    MauriPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
