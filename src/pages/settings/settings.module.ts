import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import { MartJackSharedModule } from '../../app/martjack-shared.module';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    MartJackSharedModule
   
  ],
})
export class SettingsPageModule {}
