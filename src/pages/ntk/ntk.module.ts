import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NtkPage } from './ntk';

@NgModule({
  declarations: [
    NtkPage,
  ],
  imports: [
    IonicPageModule.forChild(NtkPage),
  ],
})
export class NtkPageModule {}
