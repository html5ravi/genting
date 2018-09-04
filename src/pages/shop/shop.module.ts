import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';
import {  MartJackSharedModule } from '../../app/martjack-shared.module';

@NgModule({
  declarations: [
    ShopPage
  ],
  imports: [
    IonicPageModule.forChild(ShopPage),
    MartJackSharedModule
  ],
})
export class ShopPageModule {}
