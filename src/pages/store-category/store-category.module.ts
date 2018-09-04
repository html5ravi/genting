import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreCategoryPage } from './store-category';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';

@NgModule({
  declarations: [
    StoreCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreCategoryPage),
    SharedModule
  ],
  providers:[StoresProvider]
})
export class StoreCategoryPageModule {}
