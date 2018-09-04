import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreDetailsPage } from './store-details';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';


@NgModule({
  declarations: [
    StoreDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreDetailsPage),
    SharedModule
  ],
  providers:[StoresProvider]
})
export class StoreDetailsPageModule {}
