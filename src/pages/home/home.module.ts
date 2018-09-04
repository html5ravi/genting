import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SharedModule } from '../../app/shared.module';
import { IBeaconModule } from '../../app/ibeacon.module';
import { StoresProvider } from '../../providers/stores/stores';

import { MainSliderComponent } from '../../components/martjack/main-slider/main-slider';
import { MainNavsComponent } from '../../components/martjack/main-navs/main-navs';
import { PromotionListComponent } from '../../components/martjack/promotion-list/promotion-list';
import {  MartJackSharedModule } from '../../app/martjack-shared.module';



@NgModule({
  declarations: [
    HomePage,
    MainSliderComponent,
    MainNavsComponent,
    PromotionListComponent
    
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule,
    IBeaconModule,
    MartJackSharedModule
  ],
  exports:[IBeaconModule,
    MainSliderComponent,
    MainNavsComponent,
    PromotionListComponent
  ],
  providers:[StoresProvider]
})
export class HomePageModule {}
