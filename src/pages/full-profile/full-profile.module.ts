import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullProfilePage } from './full-profile';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';



@NgModule({
  declarations: [
    FullProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(FullProfilePage),
    SharedModule
  ],
  providers:[StoresProvider]
})
export class FullProfilePageModule {}
