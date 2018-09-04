import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';
import { SharedModule } from '../../app/shared.module';
import { IBeaconModule } from '../../app/ibeacon.module';
import { StoresProvider } from '../../providers/stores/stores';



@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
    SharedModule,
    IBeaconModule
  ],
  providers:[StoresProvider]
})
export class MapsPageModule {}
