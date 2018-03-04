import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeanaryPage } from './beanary';

@NgModule({
  declarations: [
    BeanaryPage,
  ],
  imports: [
    IonicPageModule.forChild(BeanaryPage),
  ],
})
export class BeanaryPageModule {}
