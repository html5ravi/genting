import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutGentingSimonPage } from './about-genting-simon';
import{ SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    AboutGentingSimonPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutGentingSimonPage),
    SharedModule
  ],
})
export class AboutGentingSimonPageModule {}
