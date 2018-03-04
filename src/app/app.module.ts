import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { MauripixPage } from '../pages/mauripix/mauripix';
import { MaurimenuPage } from '../pages/maurimenu/maurimenu';
import { MeifangPage } from '../pages/meifang/meifang';
import { PutehPage } from '../pages/puteh/puteh';
import { MeifangpixPage } from '../pages/meifangpix/meifangpix';
import { MeifangmenuPage } from '../pages/meifangmenu/meifangmenu';
import { PutehpixPage } from '../pages/putehpix/putehpix';
import { PutehmenuPage } from '../pages/putehmenu/putehmenu';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { BelaitPage } from '../pages/belait/belait';
import { BeanaryPage } from '../pages/beanary/beanary';
<<<<<<< HEAD
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
=======
import { BeanarymenulistPage } from '../pages/beanarymenulist/beanarymenulist';
import { BeanarypicPage } from '../pages/beanarypic/beanarypic';
import { SkmenuPage } from '../pages/skmenu/skmenu';
import { SerikandiPage } from '../pages/serikandi/serikandi';
import { SkpicPage } from '../pages/skpic/skpic';



>>>>>>> d963f308b9254e824de884bac3e42367afc0199e

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
    MauriPage,
    MauripixPage,
    BelaitPage,
    BeanaryPage,
    ResetPasswordPage,
    BelaitPage,
    BeanarymenulistPage,
    BeanarypicPage,
    SkmenuPage,
    SerikandiPage, 
    MaurimenuPage,
    MeifangPage,
    PutehPage,
    MeifangpixPage,
    MeifangmenuPage,
    PutehpixPage,
    PutehmenuPage,
    SkpicPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    MauriPage,
    MauripixPage,
    BelaitPage,
    BeanaryPage,
    ResetPasswordPage,
    BelaitPage,
    BeanarymenulistPage,
    BeanarypicPage,
    SkmenuPage,
    SerikandiPage, 
    MaurimenuPage,
    MeifangPage,
    PutehPage,
    MeifangpixPage,
    MeifangmenuPage,
    PutehpixPage,
    PutehmenuPage,
    SkpicPage 
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
