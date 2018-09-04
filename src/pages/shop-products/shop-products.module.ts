import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopProductsPage } from './shop-products';
import { SharedModule } from '../../app/shared.module';
import { MartJackSharedModule } from '../../app/martjack-shared.module';
import { ProductsProvider } from '../../providers/products/products';




@NgModule({
  declarations: [
    ShopProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopProductsPage),
    MartJackSharedModule,
    SharedModule
  ],
  providers:[ProductsProvider]

})
export class ShopProductsPageModule {}
