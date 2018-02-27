import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllrestaurantPage } from './allrestaurant';

@NgModule({
  declarations: [
    AllrestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(AllrestaurantPage),
  ],
})
export class AllrestaurantPageModule {}
