import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { StoresProvider } from '../../providers/stores/stores';
import {  MartJackSharedModule } from '../../app/martjack-shared.module';

@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    MartJackSharedModule
  ],
  providers:[StoresProvider]
})
export class SearchPageModule {}
