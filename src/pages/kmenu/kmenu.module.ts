import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KmenuPage } from './kmenu';

@NgModule({
  declarations: [
    KmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(KmenuPage),
  ],
})
export class KmenuPageModule {}
