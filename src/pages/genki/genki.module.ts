import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenkiPage } from './genki';

@NgModule({
  declarations: [
    GenkiPage,
  ],
  imports: [
    IonicPageModule.forChild(GenkiPage),
  ],
})
export class GenkiPageModule {}
