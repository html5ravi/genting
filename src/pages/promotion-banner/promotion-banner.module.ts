import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionBannerPage } from './promotion-banner';
import { SharedModule } from '../../app/shared.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { VouchersProvider } from '../../providers/vouchers/vouchers';



@NgModule({
  declarations: [
    PromotionBannerPage,
    //  BarcodeScanner,
  ],
  imports: [
    IonicPageModule.forChild(PromotionBannerPage),
    SharedModule
  ],
  providers: [BarcodeScanner,VouchersProvider],
  
})
export class PromotionBannerPageModule {}
