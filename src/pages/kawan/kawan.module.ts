import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KawanPage } from './kawan';

@NgModule({
  declarations: [
    KawanPage,
  ],
  imports: [
    IonicPageModule.forChild(KawanPage),
  ],
})
export class KawanPageModule {}
