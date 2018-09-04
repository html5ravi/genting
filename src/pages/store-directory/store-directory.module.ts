import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreDirectoryPage } from './store-directory';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';


@NgModule({
  declarations: [
    StoreDirectoryPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreDirectoryPage),
    SharedModule
  ],
  providers:[StoresProvider]
})
export class StoreDirectoryPageModule {}
