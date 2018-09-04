import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAccountPage } from './my-account';
import {  MartJackSharedModule } from '../../app/martjack-shared.module';

@NgModule({
  declarations: [
    MyAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAccountPage),
    MartJackSharedModule
  ],
})
export class MyAccountPageModule {}
