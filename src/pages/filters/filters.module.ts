import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersPage } from './filters';
import { MartJackSharedModule } from '../../app/martjack-shared.module';
import { ProductsProvider } from '../../providers/products/products';

@NgModule({
  declarations: [
    FiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersPage),
    MartJackSharedModule
  ],
  providers:[ProductsProvider]
})
export class FiltersPageModule {}
