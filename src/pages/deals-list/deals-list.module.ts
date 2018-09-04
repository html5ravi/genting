import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsListPage } from './deals-list';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';



@NgModule({
  declarations: [
    DealsListPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsListPage),
    SharedModule
  ],
  providers:[StoresProvider]
})
export class DealsListPageModule {}
