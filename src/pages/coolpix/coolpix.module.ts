import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoolpixPage } from './coolpix';

@NgModule({
  declarations: [
    CoolpixPage,
  ],
  imports: [
    IonicPageModule.forChild(CoolpixPage),
  ],
})
export class CoolpixPageModule {}
