import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckOutPage } from './check-out';
import { MartJackSharedModule } from '../../app/martjack-shared.module';
import { DatePicker } from '@ionic-native/date-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    CheckOutPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckOutPage),
    MartJackSharedModule,
    SharedModule
  ],
  providers:[DatePicker, InAppBrowser]
})
export class CheckOutPageModule {}
