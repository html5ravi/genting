import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBagPage } from './my-bag';
import {  MartJackSharedModule } from '../../app/martjack-shared.module';
import { BagListComponent } from '../../components/martjack/bag-list/bag-list';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    MyBagPage,
    BagListComponent
  ],
  imports: [
    IonicPageModule.forChild(MyBagPage),
    MartJackSharedModule,
    SharedModule
  ],
  exports:[
    BagListComponent
  ]
})
export class MyBagPageModule {}
