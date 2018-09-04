import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailPage } from './product-detail';
import {  MartJackSharedModule } from '../../app/martjack-shared.module';
import { ProductSliderComponent } from '../../components/martjack/product-slider/product-slider';
import { InternalBadgeComponent } from '../../components/martjack/internal-badge/internal-badge';
import { VariantsComponent } from '../../components/martjack/variants/variants';
import { SizeSelectComponent } from '../../components/martjack/size-select/size-select';
import { ProductDescriptionComponent } from '../../components/martjack/product-description/product-description';
import { UniquePipe } from '../../pipes/unique/unique';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    ProductDetailPage,
    ProductSliderComponent,
    InternalBadgeComponent,
    VariantsComponent,
    SizeSelectComponent,
    ProductDescriptionComponent,
    UniquePipe,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailPage),
    MartJackSharedModule,
    SharedModule
  ],
  exports:[
    ProductSliderComponent,
    InternalBadgeComponent,
    VariantsComponent,
    SizeSelectComponent,
    ProductDescriptionComponent
  ]
})
export class ProductDetailPageModule {}
