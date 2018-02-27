import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoolPage } from './cool';

@NgModule({
  declarations: [
    CoolPage,
  ],
  imports: [
    IonicPageModule.forChild(CoolPage),
  ],
})
export class CoolPageModule {}
