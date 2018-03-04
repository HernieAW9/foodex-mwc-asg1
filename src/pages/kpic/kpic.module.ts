import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KpicPage } from './kpic';

@NgModule({
  declarations: [
    KpicPage,
  ],
  imports: [
    IonicPageModule.forChild(KpicPage),
  ],
})
export class KpicPageModule {}
