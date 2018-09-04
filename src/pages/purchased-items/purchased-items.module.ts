import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchasedItemsPage } from './purchased-items';
import { MartJackSharedModule } from '../../app/martjack-shared.module';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';

@NgModule({
  declarations: [
    PurchasedItemsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(PurchasedItemsPage),
    MartJackSharedModule,
    SharedModule
  ],
  providers:[StoresProvider]
})
export class PurchasedItemsPageModule {}
