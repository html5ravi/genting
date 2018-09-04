import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandListPage } from './brand-list';
import { SharedModule } from '../../app/shared.module';


@NgModule({
  declarations: [
    BrandListPage,
  ],
  imports: [
    IonicPageModule.forChild(BrandListPage),
    SharedModule
  ],
  providers:[]
})
export class BrandListPageModule {}
